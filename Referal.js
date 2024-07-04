// Function to simulate and process referrals
function processReferrals() {
    let referrals = [];

    // Medical Referral
    let medicalReferral = {
        type: "Medical",
        from: "Physician",
        patientName: "John Doe",
        reason: "High blood pressure management",
        notes: "Referred for dietary counseling and lifestyle modifications."
    };
    referrals.push(medicalReferral);

    // Dietitian/Nutritionist Referral
    let nutritionistReferral = {
        type: "Dietitian/Nutritionist",
        from: "Registered Dietitian",
        patientName: "Jane Smith",
        reason: "Weight management",
        notes: "Referred for personalized meal planning and nutritional counseling."
    };
    referrals.push(nutritionistReferral);

    // Fitness and Exercise Referral
    let fitnessReferral = {
        type: "Fitness/Exercise",
        from: "Physical Therapist",
        patientName: "Michael Brown",
        reason: "Rehabilitation post-injury",
        notes: "Referred for tailored exercise program to complement physical therapy."
    };
    referrals.push(fitnessReferral);

    // Behavioral Health Referral
    let behavioralReferral = {
        type: "Behavioral Health",
        from: "Psychologist",
        patientName: "Sarah Johnson",
        reason: "Stress-related eating behaviors",
        notes: "Referred for behavioral therapy sessions focusing on emotional eating triggers."
    };
    referrals.push(behavioralReferral);

    // Specialized Wellness Programs Referral
    let wellnessProgramReferral = {
        type: "Wellness Program",
        from: "Wellness Coordinator",
        patientName: "David Wilson",
        reason: "Diabetes management",
        notes: "Referred for enrollment in diabetes management program."
    };
    referrals.push(wellnessProgramReferral);

    // Community and Support Group Referral
    let communityReferral = {
        type: "Community Support",
        from: "Community Outreach Coordinator",
        patientName: "Emily Taylor",
        reason: "Nutrition education",
        notes: "Referred for participation in community nutrition workshops."
    };
    referrals.push(communityReferral);

    return referrals;
}

// Function to display referrals
function displayReferrals(referrals) {
    let referralsContainer = document.getElementById('referrals-container');

    referrals.forEach(referral => {
        let referralCard = document.createElement('div');
        referralCard.classList.add('referral-card');

        let title = document.createElement('h2');
        title.textContent = `${referral.type} Referral`;
        referralCard.appendChild(title);

        let from = document.createElement('p');
        from.textContent = `From: ${referral.from}`;
        referralCard.appendChild(from);

        let patientName = document.createElement('p');
        patientName.textContent = `Patient Name: ${referral.patientName}`;
        referralCard.appendChild(patientName);

        let reason = document.createElement('p');
        reason.textContent = `Reason: ${referral.reason}`;
        referralCard.appendChild(reason);

        let notes = document.createElement('p');
        notes.textContent = `Notes: ${referral.notes}`;
        referralCard.appendChild(notes);

        referralsContainer.appendChild(referralCard);
    });
}

// Simulate processing referrals
let clinicReferrals = processReferrals();

// Display processed referrals
displayReferrals(clinicReferrals);

