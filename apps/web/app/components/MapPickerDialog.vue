<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { MapPin } from "lucide-vue-next";

// Leaflet is imported dynamically to avoid SSR "window is not defined" error
let L: typeof import("leaflet") | null = null;

const props = defineProps<{
  lat?: string;
  lng?: string;
}>();

const emit = defineEmits<{
  (e: "confirm", lat: string, lng: string): void;
}>();

const open = ref(false);
const mapContainer = ref<HTMLElement | null>(null);
const selectedLat = ref("");
const selectedLng = ref("");

let map: any = null;
let marker: any = null;

// Hamburg fallback
const FALLBACK_LAT = 53.5511;
const FALLBACK_LNG = 9.9937;

async function loadLeaflet() {
  if (L) return L;
  const leaflet = await import("leaflet");
  await import("leaflet/dist/leaflet.css");
  L = leaflet.default || leaflet;
  return L;
}

function createMarkerIcon(leaflet: any) {
  return leaflet.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="hsl(221.2 83.2% 53.3%)" stroke="white" stroke-width="1" width="32" height="32"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

function initMap(leaflet: any, center: [number, number], zoom: number) {
  if (!mapContainer.value) return;

  map = leaflet.map(mapContainer.value).setView(center, zoom);
  leaflet
    .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    })
    .addTo(map);

  // If we already have coordinates, place marker
  if (selectedLat.value && selectedLng.value) {
    const lat = parseFloat(selectedLat.value);
    const lng = parseFloat(selectedLng.value);
    if (!isNaN(lat) && !isNaN(lng)) {
      placeMarker(leaflet, lat, lng);
      map.setView([lat, lng], 14);
    }
  }

  map.on("click", (e: any) => {
    placeMarker(leaflet, e.latlng.lat, e.latlng.lng);
  });
}

function placeMarker(leaflet: any, lat: number, lng: number) {
  if (!map) return;

  selectedLat.value = lat.toFixed(6);
  selectedLng.value = lng.toFixed(6);

  if (marker) {
    marker.setLatLng([lat, lng]);
  } else {
    marker = leaflet
      .marker([lat, lng], {
        draggable: true,
        icon: createMarkerIcon(leaflet),
      })
      .addTo(map);

    marker.on("dragend", () => {
      if (!marker) return;
      const pos = marker.getLatLng();
      selectedLat.value = pos.lat.toFixed(6);
      selectedLng.value = pos.lng.toFixed(6);
    });
  }
}

function confirmSelection() {
  emit("confirm", selectedLat.value, selectedLng.value);
  open.value = false;
}

watch(open, async (isOpen) => {
  if (isOpen) {
    // Initialize selection from props
    selectedLat.value = props.lat || "";
    selectedLng.value = props.lng || "";

    // Load Leaflet dynamically (client-only)
    const leaflet = await loadLeaflet();

    await nextTick();
    // Wait a bit for the dialog animation to complete
    setTimeout(() => {
      const hasCoords =
        selectedLat.value &&
        selectedLng.value &&
        !isNaN(parseFloat(selectedLat.value)) &&
        !isNaN(parseFloat(selectedLng.value));

      if (hasCoords) {
        const lat = parseFloat(selectedLat.value);
        const lng = parseFloat(selectedLng.value);
        initMap(leaflet, [lat, lng], 14);
      } else {
        // Try browser geolocation
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              initMap(
                leaflet,
                [position.coords.latitude, position.coords.longitude],
                13,
              );
            },
            () => {
              // Fallback to Hamburg
              initMap(leaflet, [FALLBACK_LAT, FALLBACK_LNG], 12);
            },
            { timeout: 5000 },
          );
        } else {
          initMap(leaflet, [FALLBACK_LAT, FALLBACK_LNG], 12);
        }
      }
    }, 150);
  } else {
    // Cleanup
    if (map) {
      map.remove();
      map = null;
      marker = null;
    }
  }
});
</script>

<template>
  <Dialog v-model:open="open">
    <Button variant="outline" size="sm" class="w-full" @click="open = true">
      <MapPin class="mr-2 h-4 w-4" />
      Pick on Map
    </Button>

    <DialogContent class="sm:max-w-2xl max-h-[90vh]">
      <DialogHeader>
        <DialogTitle>Pick a Location</DialogTitle>
        <DialogDescription>
          Click on the map to place a marker, or drag it to adjust. Then confirm
          your selection.
        </DialogDescription>
      </DialogHeader>

      <div
        ref="mapContainer"
        class="w-full h-[400px] rounded-md border border-border overflow-hidden"
      />

      <div
        v-if="selectedLat && selectedLng"
        class="flex items-center gap-4 text-sm text-muted-foreground"
      >
        <span><strong>Lat:</strong> {{ selectedLat }}</span>
        <span><strong>Lng:</strong> {{ selectedLng }}</span>
      </div>

      <DialogFooter>
        <Button variant="outline" @click="open = false"> Cancel </Button>
        <Button
          :disabled="!selectedLat || !selectedLng"
          @click="confirmSelection"
        >
          <MapPin class="mr-2 h-4 w-4" />
          Confirm Location
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
