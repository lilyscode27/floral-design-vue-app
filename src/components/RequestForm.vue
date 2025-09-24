<template>
    <!--Request Form-->
    <section id="request" class="py-5">
        <div class="container">
            <form id="requestForm" @submit.prevent="submitForm">
                <!-- Contact Information -->
                <div class="row g-3 mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <h5 class="fw-bold">Contact Information</h5>
                    </div>
                </div>

                <div class="row g-3 mb-4 justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <label for="name" class="form-label">Full Name</label>
                        <input id="name" name="name" type="text" class="form-control focus-ring"
                            placeholder="Enter your full name here" v-model="name" />
                        <div id="nameMsg" class="form-text text-danger" v-if="submitted && !isNameValid">You must enter
                            your name</div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <label for="phone" class="form-label">Phone</label>
                        <input id="phone" name="phone" type="text" class="form-control focus-ring"
                            placeholder="04xx xxx xxx" v-model="phone" />
                        <div id="phoneMsg" class="form-text text-danger" v-if="submitted && !isPhoneValid">Invalid
                            phone number</div>
                    </div>
                </div>

                <div class="row g-3 mb-4 justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" name="email" type="text" class="form-control focus-ring"
                            placeholder="Enter your email here" v-model="email" />
                        <div id="emailMsg" class="form-text text-danger" v-if="submitted && !isEmailValid">Invalid
                            email address</div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <label for="address" class="form-label">Address</label>
                        <input id="address" name="address" type="text" class="form-control focus-ring"
                            placeholder="Enter your address here" v-model="address" />
                        <div id="addressMsg" class="form-text text-danger" v-if="submitted && !isAddressValid">You must
                            enter your address</div>
                    </div>
                </div>

                <!-- Event Information -->
                <div class="row g-3 mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <h5 class="fw-bold">Event Information</h5>
                    </div>
                </div>

                <div class="row g-3 mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <label for="eventType" class="form-label">Event Type</label>
                        <select id="eventType" name="event_type" class="form-select focus-ring" v-model="eventType">
                            <option value="" selected disabled>Select an event type…</option>
                            <option v-for="eventTypeOption in eventTypeOptions" :key="eventTypeOption"
                                :value="eventTypeOption">
                                {{ eventTypeOption }}
                            </option>
                        </select>
                        <div id="eventTypeMsg" class="form-text text-danger" v-if="submitted && !isEventTypeValid">You
                            must select an event type</div>
                    </div>
                </div>

                <div class="row g-3 mb-4 justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <label for="eventSize" class="form-label">Event Size</label>
                        <input id="eventSize" name="event_size" type="number" class="form-control focus-ring"
                            placeholder="Enter the number of people" v-model.number="eventSize" />
                        <div class="form-text text-danger" v-if="submitted && !isEventSizeValid">Event size must be
                            greater than 0</div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <label for="eventDate" class="form-label">Event Date</label>
                        <input id="eventDate" name="event_date" type="date" class="form-control focus-ring"
                            v-model="eventDate" />
                        <div id="eventDateMsg" class="form-text text-danger" v-if="submitted && !isEventDateValid">You
                            must select a date in the future</div>
                    </div>
                </div>

                <div class="row g-3 mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <label for="eventDetails" class="form-label">Event Details</label>
                        <textarea id="eventDetails" name="event_details" class="form-control focus-ring" rows="3"
                            placeholder="Venue, theme, colour palette, delivery window…"
                            v-model="eventDetails"></textarea>
                        <div id="eventDetailsMsg" class="form-text text-danger"
                            v-if="submitted && !isEventDetailsValid">You must include event details</div>
                    </div>
                </div>

                <!-- Style Selection -->
                <div class="mb-4">
                    <div class="row mb-3 justify-content-center">
                        <h5 class="col-lg-8 col-md-6 fw-bold mb-3">Style</h5>
                    </div>

                    <div class="row g-3 mb-3 justify-content-center">
                        <!-- Garden Elegance -->
                        <div class="col-lg-4 col-md-6">
                            <input class="btn-check" type="radio" name="style" id="style-garden" value="Garden Elegance"
                                v-model="style" />
                            <label class="card h-100 shadow-sm btn" for="style-garden">
                                <div class="card-body text-center">
                                    <h6 class="fw-bold mb-2 text-body-secondary">
                                        Garden Elegance
                                    </h6>
                                    <p class="text-body-secondary small mb-0">
                                        Lush, romantic, seasonal blooms with trailing greenery.
                                    </p>
                                </div>
                            </label>
                        </div>

                        <!-- Modern Minimalist -->
                        <div class="col-lg-4 col-md-6">
                            <input class="btn-check" type="radio" name="style" id="style-modern"
                                value="Modern Minimalist" v-model="style" />
                            <label class="card h-100 shadow-sm btn" for="style-modern">
                                <div class="card-body text-center">
                                    <h6 class="fw-bold mb-2 text-body-secondary">
                                        Modern Minimalist
                                    </h6>
                                    <p class="text-body-secondary small mb-0">
                                        Clean lines, focal blooms, refined negative space.
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="row g-3 mb-3 justify-content-center">
                        <!-- Rustic Charm -->
                        <div class="col-lg-4 col-md-6">
                            <input class="btn-check" type="radio" name="style" id="style-rustic" value="Rustic Charm"
                                v-model="style" />
                            <label class="card h-100 shadow-sm btn" for="style-rustic">
                                <div class="card-body text-center">
                                    <h6 class="fw-bold mb-2 text-body-secondary">
                                        Rustic Charm
                                    </h6>
                                    <p class="text-body-secondary small mb-0">
                                        Earthy textures, wildflower feel, cosy and organic.
                                    </p>
                                </div>
                            </label>
                        </div>

                        <!-- Luxe Statement -->
                        <div class="col-lg-4 col-md-6">
                            <input class="btn-check" type="radio" name="style" id="style-luxe" value="Luxe Statement"
                                v-model="style" />
                            <label class="card h-100 shadow-sm btn" for="style-luxe">
                                <div class="card-body text-center">
                                    <h6 class="fw-bold mb-2 text-body-secondary">
                                        Luxe Statement
                                    </h6>
                                    <p class="text-body-secondary small mb-0">
                                        Grand, layered textures, premium blooms and rich hues.
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="row g-3 mb-3 justify-content-center">
                        <!-- Other -->
                        <div class="col-lg-4 col-md-6">
                            <input class="btn-check" type="radio" name="style" id="style-other" value="other"
                                v-model="style" />
                            <label class="card h-100 shadow-sm btn" for="style-other">
                                <div class="card-body text-center">
                                    <h6 class="fw-bold mb-2 text-body-secondary">Other</h6>
                                    <p class="text-body-secondary small mb-0">
                                        Describe your preferred style below
                                    </p>
                                </div>
                            </label>
                        </div>
                        <div class="col-lg-4 col-md-6"></div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-12">
                            <div id="styleMsg" class="form-text text-danger" v-if="submitted && !isStyleValid">You must
                                select a style</div>
                        </div>
                        <div class="col-lg-8 col-md-12"></div>
                    </div>

                    <div class="row mt-3 justify-content-center">
                        <div class="col-lg-8 col-md-12">
                            <label for="styleDetails" class="form-label">Style Details</label>
                            <textarea id="styleDetails" name="style_details" class="form-control focus-ring" rows="3"
                                placeholder="Specific vibe, colours, references…" v-model="styleDetails"></textarea>
                            <div id="styleDetailsMsg" class="form-text text-danger"
                                v-if="submitted && !isStyleDetailsValid">You must include style details</div>
                        </div>
                    </div>
                </div>

                <!-- Specific Flowers (optional) -->
                <div class="row mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <label for="flowerReq" class="form-label">Specific Flower Requirements (optional)</label>
                        <textarea id="flowerReq" name="flower_requirements" class="form-control focus-ring" rows="3"
                            placeholder="e.g., native-only, avoid lilies, include sunflowers…"
                            v-model="flowerRequirements"></textarea>
                    </div>
                </div>

                <!-- Budget -->
                <div class="row g-3 mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <label for="budget" class="form-label">Budget Range</label>
                        <select id="budget" name="budget_range" class="form-select" v-model="budget">
                            <option value="" selected disabled>Select a range…</option>
                            <option v-for="budgetOption in budgetOptions" :key="budgetOption" :value="budgetOption">
                                {{ budgetOption }}
                            </option>
                        </select>
                        <div id="budgetMsg" class="form-text text-danger" v-if="submitted && !isBudgetValid">You must
                            select a budget range</div>
                    </div>
                </div>

                <!-- Note (optional) -->
                <div class="row mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <label for="note" class="form-label">Note (optional)</label>
                        <textarea id="note" name="note" class="form-control focus-ring" rows="3"
                            placeholder="Anything else we should know?" v-model="note"></textarea>
                    </div>
                </div>

                <!-- Preference to receive email updates -->
                <div class="row mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12 form-check">
                        <input class="form-check-input" type="checkbox" value="" id="receiveUpdates"
                            v-model="receiveUpdates" />
                        <label class="form-check-label" for="receiveUpdates">
                            I wish to receive updates via email
                        </label>
                    </div>
                </div>

                <!-- Submit & Reset -->
                <div class="row mb-4 justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="d-grid d-sm-flex gap-2">
                            <button type="submit" class="btn btn-primary btn-lg">
                                Submit Request
                            </button>
                            <button type="reset" class="btn btn-primary btn-lg">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div id="emittedData" class="col-lg-8 col-md-12" v-if="displayEmittedData">
                        <h5 class="text-center">Form submitted successfully!</h5>
                        <pre class="mt-3 p-3">Emitted Data:
{
  name: {{ name }},
  phone: {{ phone }},
  email: {{ email }},
  address: {{ address }},
  eventType: {{ eventType }},
  eventSize: {{ eventSize }},
  eventDate: {{ eventDate }},
  eventDetails: {{ eventDetails }},
  style: {{ style }},
  styleDetails: {{ styleDetails }},
  flowerRequirements: {{ flowerRequirements }},
  budget: {{ budget }},
  note: {{ note }},
  receiveUpdates: {{ receiveUpdates }},
}</pre>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    defaultName: String,
});

// Define emits (to emit events like `submit-form`)
const emit = defineEmits();

// Options for event types
const eventTypeOptions = [
    "Wedding",
    "Birthday",
    "Graduation",
    "Corporate Function",
    "Other (Enter event details below)",
];

// Options for budget range
const budgetOptions = [
    "$50 - $100",
    "$100 - $200",
    "$200 - $400",
    "$400+",
];

// Reactive variables for the form fields
const name = ref(props.defaultName);
const phone = ref("");
const email = ref("");
const address = ref("");
const eventType = ref("");
const eventSize = ref(0);
const eventDate = ref("");
const eventDetails = ref("");
const style = ref("");
const styleDetails = ref("");
const flowerRequirements = ref("");
const budget = ref("");
const note = ref("");
const receiveUpdates = ref(false);

// Flag to display error messages only after the user has clicked 'Submit'
const submitted = ref(false);

// Validate form data

// Name: Must not be empty
const isNameValid = computed(() => {
    return name.value.trim();
});

// Phone: Must not be empty and must be in the Australian phone number format
const isPhoneValid = computed(() => {
    const auPhone = /^(?:\+61|0)(?:4\d{8}|[2378]\d{8})$/; // Australian phone number regex
    return auPhone.test(phone.value.trim());
});

// Email: Must not be empty and must be in a valid format
const isEmailValid = computed(() => {
    const emailPattern =
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Valid email regex
    return emailPattern.test(email.value.trim());
});

// Address: Must not be empty
const isAddressValid = computed(() => {
    return address.value.trim();
});

// Event type: Must be selected
const isEventTypeValid = computed(() => {
    return eventType.value;
});

// Event size: Must be greater than 0
const isEventSizeValid = computed(() => {
    return eventSize.value > 0;
});

// Event details: Must not be empty if "other" is chosen for event type
const isEventDetailsValid = computed(() => {
    return (
        (isEventTypeValid.value &&
            eventType.value != "Other (Enter event details below)") ||
        (eventType.value === "Other (Enter event details below)" &&
            eventDetails.value.trim())
    );
});

// Event date: Must not be empty and must be a date in the future
const isEventDateValid = computed(() => {
    if (!eventDate.value) return false;

    const today = new Date(); // Get the current date
    const convertedDate = new Date(eventDate.value);
    return convertedDate > today;
});

// Event style: Must be selected
const isStyleValid = computed(() => {
    return style.value;
});

// Style details: Must not be empty if "other" is chosen for event style
const isStyleDetailsValid = computed(() => {
    return (
        (isStyleValid.value && style.value != "other") ||
        (style.value === "other" && styleDetails.value.trim())
    );
});

// Budget range: Must be selected
const isBudgetValid = computed(() => {
    return budget.value;
});

// Control the display of the emitted data
const displayEmittedData = ref(false);

// Function to handle form submission
const submitForm = () => {
    // Display error messages (if any)
    submitted.value = true;

    // Return if required data is missing or invalid
    if (
        !isNameValid.value ||
        !isPhoneValid.value ||
        !isEmailValid.value ||
        !isAddressValid.value ||
        !isEventTypeValid.value ||
        !isEventSizeValid.value ||
        !isEventDetailsValid.value ||
        !isEventDateValid.value ||
        !isStyleValid.value ||
        !isStyleDetailsValid.value ||
        !isBudgetValid.value
    )
        return;

    // Construct formData object
    const formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        address: address.value,
        eventType: eventType.value,
        eventSize: eventSize.value,
        eventDate: eventDate.value,
        eventDetails: eventDetails.value,
        style: style.value,
        styleDetails: styleDetails.value,
        flowerRequirements: flowerRequirements.value,
        budget: budget.value,
        note: note.value,
        receiveUpdates: receiveUpdates.value,
    };

    displayEmittedData.value = true; // Display emitted data

    // After 2 seconds, reset fields
    setTimeout(() => {
        name.value = props.defaultName;
        phone.value = "";
        email.value = "";
        address.value = "";
        eventType.value = "";
        eventSize.value = 0;
        eventDate.value = "";
        eventDetails.value = "";
        style.value = "";
        styleDetails.value = "";
        flowerRequirements.value = "";
        budget.value = "";
        note.value = "";
        receiveUpdates.value = false;

        displayEmittedData.value = false; // Clear emitted data
        submitted.value = false;
    }, 2000);

    // Emit the 'submit-form' event with the formData object
    emit("submit-form", formData);
};

</script>

<style scoped>
#formSummary>div>div {
    background-color: var(--bs-primary-bg-subtle);
}

pre {
    background-color: var(--bs-primary-bg-subtle);
    border: 1px solid black;
}
</style>