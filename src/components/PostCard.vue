<script setup>

defineProps({
    post: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="post-card">
        <header>
            <span>
                <h2>{{ post.title }} <br/>
                    {{ post.subtitle }}</h2>                
                <h3>
                    A <span class="tag">{{ post.type }}</span>
                    at <span class="tag">{{ post.venue }}</span>
                </h3>
            </span>
            <span id="event_date">{{ post.event_date }}</span>
        </header>
        <div id="tags">
            <ul id="tags_list">
                <span class="line_header">Tags</span>
                <li class="tag " v-for="tag in post.tags" :key="tag">
                    {{ tag }}
                </li>
            </ul>
        </div>
        <div v-if="post.language != 'English'">
            <span class="line_header">Important</span> The {{ post.type }} is in {{ post.language }}
        </div>
        <br/>

        <p style="white-space: pre-wrap;">{{ post.description }}</p>
        <br/>
        <p id="publication_date"><span class="line_header">Published on</span> {{ post.published }}</p>
    </div>
</template>

<style scoped>
.tag {
    margin: 2px;

    border-radius: 5px;
    
    display: inline-block;
}
/*
.tag:hover {
    color: var(--color-prime-dark);
    transition: 0.4s;
}
*/

#tags_list {
    list-style-type: none;
    justify-content: space-around;
    /* Remove default padding from major browsers */
    padding: 0;
    /* Hide the default decorations for li items */
}
#tags_list li::after {
    content: ",";
}
#tags_list li:last-child::after {
    content: "";
}

.line_header {
    color: var(--color-prime-light);
}
.line_header::after {
    content: ':';
}

#event_date {
    text-align: right;
    padding-left: 5px;
}



.post-card {
    /*background-color: var(--vt-c-black-soft);*/
    /*border-color: var(--color-second-dark);*/
    border: 1px solid transparent;
    
    border-radius: 5px;
    margin: 5px;
    padding: 5px;

    max-width: 500px;
    min-width: 50px;
    height: auto;
    
    justify-content: space-between;
}

.post-card:hover {
    border: 1px solid;
    transition: 0.2s;
}
</style>




