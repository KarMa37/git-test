$(function () {
    var patientsList = [
        { firstName: "Jan", lastName: "Kowalski" },
        { firstName: "Albert", lastName: "Einstein" },
        { firstName: "Karol", lastName: "Winkelmann" },
        { firstName: "Andrzej", lastName: "Kielcz" }
        { firstName: "Stefan", lastName: "Piździocha" }
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}