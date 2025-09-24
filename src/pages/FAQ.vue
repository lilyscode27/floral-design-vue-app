<template>
    <main>
        <!--How It Works-->
        <section id="how-it-works" class="py-5 mt-5">
            <div class="container">
                <!-- Section heading -->
                <div class="row text-center mb-4">
                    <div class="col-12 col-lg-10 col-xl-8 mx-auto text-center">
                        <p class="text-muted mb-0 fw-light">Steps</p>
                        <h2 class="display-3">How It Works</h2>
                        <p class="lead mb-4">
                            From selecting the perfect blooms to customizing your floral
                            arrangement, our process is simple and stress-free.
                        </p>
                    </div>
                </div>

                <!-- Steps -->
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="row text-center">
                            <!-- Step 1 -->
                            <div class="col-lg-4">
                                <div class="step-icon mx-auto border border-2 border rounded-circle d-flex align-items-center justify-content-center"
                                    style="width: 150px; height: 150px">
                                    <i class="bi bi-flower1 fs-1 text-primary"></i>
                                </div>
                                <h4 class="fw-bold mt-3 fs-5">Step 1: Browse Flowers</h4>
                                <p class="text-muted mt-4 fs-6 px-lg-3">
                                    Explore our curated selection of seasonal, native, and
                                    all-time favorite flowers.
                                </p>
                                <router-link to="/all-flowers" class="btn btn-primary btn-sm my-3">Browse
                                    Flowers</router-link>
                            </div>

                            <!-- Step 2 -->
                            <div class="col-lg-4">
                                <div class="step-icon mx-auto border border-2 border rounded-circle d-flex align-items-center justify-content-center"
                                    style="width: 150px; height: 150px">
                                    <i class="bi bi-brush fs-1 text-primary"></i>
                                </div>
                                <h4 class="fw-bold mt-3 fs-5">Step 2: Browse Designs</h4>
                                <p class="text-muted mt-4 fs-6 px-lg-3">
                                    Discover our unique floral designs for weddings, birthdays,
                                    and special events.
                                </p>
                                <router-link to="/floral-designs" class="btn btn-primary btn-sm my-3">Browse
                                    Designs</router-link>
                            </div>

                            <!-- Step 3 -->
                            <div class="col-lg-4">
                                <div class="step-icon mx-auto border border-2 border rounded-circle d-flex align-items-center justify-content-center"
                                    style="width: 150px; height: 150px">
                                    <i class="bi bi-card-checklist fs-1 text-primary"></i>
                                </div>
                                <h4 class="fw-bold mt-3 fs-5">Step 3: Make a Request</h4>
                                <p class="text-muted mt-4 fs-6 px-lg-3">
                                    Submit your custom flower request and let us create
                                    something truly special.
                                </p>
                                <router-link to="/request" class="btn btn-primary btn-sm my-3">Make a
                                    Request</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--FAQ-->
        <section id="faq" class="py-5">
            <div class="container">
                <!-- Section heading -->
                <div class="row justify-content-center text-center mb-3">
                    <div class="col-lg-8 col-xl-7">
                        <span class="text-muted">F.A.Q</span>
                        <h2 class="display-3">Frequently Asked Questions</h2>
                        <p class="lead">
                            Answers to common questions about ordering, delivery, seasonal availability, and flower
                            care.
                        </p>
                    </div>
                </div>

                <!-- Section content -->
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="accordion accordion-flush bg-light rounded-3 p-2 p-md-3" id="faqAccordion">

                            <FAQComponent v-for="item in faqData" :key="item.id" :id="item.id" :question="item.question"
                                :answer="item.answer" />

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>
<script setup>
import FAQComponent from "../components/FAQComponent.vue";
import faqData from "../assets/data/faq.json"
</script>