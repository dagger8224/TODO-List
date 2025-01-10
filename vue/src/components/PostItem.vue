<template>
    <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <div class="text-end">
                <RouterLink :to="`/edit/${post.id}`" class="btn btn-primary me-2">Edit</RouterLink>
                <button class="btn btn-danger" @click="onDeleteClick(post)">Delete</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    });
    const emit = defineEmits(['delete']);
    function onDeleteClick(post) {
        if (!window.confirm('Are you sure you want to delete post?')) {
            return;
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'DELETE'
        }).then(res => {
            if (res.status === 200) {
                emit('delete', post);
            }
        });
    }
</script>

<style>
</style>
