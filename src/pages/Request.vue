<template>
    <!-- Heading -->
    <div class="container-fluid py-5 mt-5 bg-primary-subtle">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
                <h2 class="display-3 m-0">Make a Request</h2>
                <p class="lead mb-0">
                    Tell us about your event and preferred style. We'll craft something beautiful just for you.
                </p>
            </div>
        </div>
    </div>

    <!-- Request Form -->
    <main>
        
        <RequestForm @submit-form="handleForm" :defaultName="'Default Name'"></RequestForm>
        <div id="formSummary" class="container mb-3" v-if="displaySummary">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12 border border-2 border-primary border-opacity-50 rounded-4">
                    <h3 class="py-2">Thank you for your submission!</h3>
                    <p>Full Name: {{ formSummary.name }}</p>
                    <p>Phone Number: {{ formSummary.phone }}</p>
                    <p>Email: {{ formSummary.email }}</p>
                    <p>Address: {{ formSummary.address }}</p>
                    <p>Event Type: {{ formSummary.eventType }}</p>
                    <p>Event Size: {{ formSummary.eventSize }}</p>
                    <p>Event Date: {{ formSummary.eventDate }}</p>
                    <p>Event Details: {{ formSummary.eventDetails }}</p>
                    <p>Style: {{ formSummary.style }}</p>
                    <p>Style Details: {{ formSummary.styleDetails }}</p>
                    <p>Flower Requirements: {{ formSummary.flowerRequirements }}</p>
                    <p>Budget range: {{ formSummary.budget }}</p>
                    <p>Note: {{ formSummary.note }}</p>
                    <p>Receive updates via email? {{ formSummary.receiveUpdates ? "Yes" : "No" }}</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import RequestForm from '../components/RequestForm.vue';
import { ref, reactive } from 'vue';

// Reactive variable to store the form summary
const formSummary = reactive({
    name: null,
    phone: null,
    email: null,
    address: null,
    eventType: null,
    eventSize: null,
    eventDate: null,
    eventDetails: null,
    style: null,
    styleDetails: null,
    flowerRequirements: null,
    budget: null,
    note: null,
    receiveUpdates: null,
});

const displaySummary = ref(false);

// Function to update the formSummary with the provided formData
const handleForm = (formData) => {
    formSummary.name = formData.name;
    formSummary.phone = formData.phone;
    formSummary.email = formData.email;
    formSummary.address = formData.address;
    formSummary.eventType = formData.eventType;
    formSummary.eventSize = formData.eventSize;
    formSummary.eventDate = formData.eventDate;
    formSummary.eventDetails = formData.eventDetails;
    formSummary.style = formData.style;
    formSummary.styleDetails = formData.styleDetails;
    formSummary.flowerRequirements = formData.flowerRequirements;
    formSummary.budget = formData.budget;
    formSummary.note = formData.note;
    formSummary.receiveUpdates = formData.receiveUpdates;

    displaySummary.value = true;
};
</script>