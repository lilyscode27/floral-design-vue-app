<template>
    <div class="accordion-item">
        <!--Question-->
        <h2 class="accordion-header" :id="`q${id}h`">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#q${id}`" aria-expanded="false" :aria-controls="`q${id}`">
                <i class="bi bi-question-circle-fill me-2 text-primary"></i>
                {{ question }}
            </button>
        </h2>

        <!--Answer-->
        <div :id="`q${id}`" class="accordion-collapse collapse" :aria-labelledby="`q${id}h`"
            data-bs-parent="#faqAccordion">
            <div class="accordion-body">
                {{ answer }}
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    id: Number,
    question: String,
    answer: String
})
</script>
