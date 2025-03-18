<script setup>
const onTemplatedUpload = () => {

}
const onSelectedFiles = () => {
    
}
</script>

<template>
    <FileUpload name="excel" @upload="onTemplatedUpload($event)" :multiple="true" accept="" :maxFileSize="1000000" @select="onSelectedFiles">
        <template #empty>
            <div class="flex items-center justify-center flex-col">
                <i class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color" />
                <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
            </div>
        </template>
    </FileUpload>
</template>