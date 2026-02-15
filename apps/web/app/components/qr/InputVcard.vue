<script setup lang="ts">
import { Plus, Trash2 } from 'lucide-vue-next'

const name = defineModel<string>('name', { required: true })
const phone = defineModel<string>('phone', { required: true })
const email = defineModel<string>('email', { required: true })
const org = defineModel<string>('org', { required: true })

const title = defineModel<string>('title', { required: true })
const role = defineModel<string>('role', { required: true })
const url = defineModel<string>('url', { required: true })
const note = defineModel<string>('note', { required: true })
const birthday = defineModel<string>('birthday', { required: true })
const street = defineModel<string>('street', { required: true })
const city = defineModel<string>('city', { required: true })
const zip = defineModel<string>('zip', { required: true })
const country = defineModel<string>('country', { required: true })

const activeFields = defineModel<string[]>('activeFields', { required: true })

const props = defineProps<{
  availableFields: ReadonlyArray<{ id: string; label: string; group: string }>
}>()

const emit = defineEmits<{
  addField: [fieldId: string]
  removeField: [fieldId: string]
}>()
</script>

<template>
  <h2 class="text-lg font-semibold tracking-tight">Contact</h2>
  <div class="space-y-2">
    <Label for="vcardName">Full Name</Label>
    <Input id="vcardName" v-model="name" placeholder="John Doe" />
  </div>
  <div class="space-y-2">
    <Label for="vcardPhone">Phone</Label>
    <Input id="vcardPhone" v-model="phone" type="tel" placeholder="+1 234 567890" />
  </div>
  <div class="space-y-2">
    <Label for="vcardEmail">Email</Label>
    <Input id="vcardEmail" v-model="email" type="email" placeholder="john@example.com" />
  </div>
  <div class="space-y-2">
    <Label for="vcardOrg">Organization</Label>
    <Input id="vcardOrg" v-model="org" placeholder="Acme Inc." />
  </div>

  <div v-if="activeFields.length > 0" class="space-y-4 pt-2">
    <div v-for="fieldId in activeFields" :key="fieldId" class="space-y-2 relative">
      <div class="flex items-center justify-between">
        <Label :for="'vcard-' + fieldId">
          {{ availableFields.find((f) => f.id === fieldId)?.label }}
        </Label>
        <Button
          variant="ghost"
          size="icon"
          class="h-8 w-8 text-muted-foreground hover:text-destructive"
          @click="emit('removeField', fieldId)"
        >
          <Trash2 class="h-4 w-4" />
        </Button>
      </div>

      <template v-if="fieldId === 'title'">
        <Input id="vcard-title" v-model="title" placeholder="Software Engineer" />
      </template>
      <template v-else-if="fieldId === 'role'">
        <Input id="vcard-role" v-model="role" placeholder="Engineering" />
      </template>
      <template v-else-if="fieldId === 'url'">
        <Input id="vcard-url" v-model="url" type="url" placeholder="https://example.com" />
      </template>
      <template v-else-if="fieldId === 'note'">
        <textarea
          id="vcard-note"
          v-model="note"
          placeholder="Additional information …"
          rows="2"
          class="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
        />
      </template>
      <template v-else-if="fieldId === 'birthday'">
        <Input id="vcard-birthday" v-model="birthday" type="date" />
      </template>
      <template v-else-if="fieldId === 'address'">
        <div class="grid grid-cols-1 gap-2 border-l-2 border-muted pl-3 ml-1 mt-1">
          <div class="space-y-1">
            <Label class="text-xs text-muted-foreground">Street</Label>
            <Input v-model="street" placeholder="Main St 123" />
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="space-y-1">
              <Label class="text-xs text-muted-foreground">ZIP</Label>
              <Input v-model="zip" placeholder="12345" />
            </div>
            <div class="space-y-1">
              <Label class="text-xs text-muted-foreground">City</Label>
              <Input v-model="city" placeholder="City" />
            </div>
          </div>
          <div class="space-y-1">
            <Label class="text-xs text-muted-foreground">Country</Label>
            <Input v-model="country" placeholder="Germany" />
          </div>
        </div>
      </template>
    </div>
  </div>

  <div class="pt-2">
    <Select @update:model-value="(v: any) => emit('addField', String(v))">
      <SelectTrigger
        class="w-full border-dashed border-2 hover:border-primary hover:text-primary transition-colors text-muted-foreground"
      >
        <div class="flex items-center gap-2">
          <Plus class="h-4 w-4" />
          <span>Add field (Address, Job, Note...)</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup v-for="group in ['Job', 'Location', 'Other']" :key="group">
          <SelectLabel>{{ group }}</SelectLabel>
          <SelectItem
            v-for="field in availableFields.filter((f) => f.group === group)"
            :key="field.id"
            :value="field.id"
            :disabled="activeFields.includes(field.id)"
          >
            {{ field.label }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
