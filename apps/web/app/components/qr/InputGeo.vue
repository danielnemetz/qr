<script setup lang="ts">
const lat = defineModel<string>('lat', { required: true })
const lng = defineModel<string>('lng', { required: true })
</script>

<template>
  <h2 class="text-lg font-semibold tracking-tight">Location</h2>
  <div class="space-y-2">
    <Label for="geoLat">Latitude</Label>
    <Input id="geoLat" v-model="lat" type="text" inputmode="decimal" placeholder="53.551100" />
  </div>
  <div class="space-y-2">
    <Label for="geoLng">Longitude</Label>
    <Input id="geoLng" v-model="lng" type="text" inputmode="decimal" placeholder="9.993700" />
  </div>
  <MapPickerDialog
    :lat="lat"
    :lng="lng"
    @confirm="(newLat: string, newLng: string) => { lat = newLat; lng = newLng }"
  />
</template>
