// script.js
// Fonction pour gérer la logique de désactivation/réactivation
function handleAgeField(ageFieldClass, girlsFieldId, boysFieldId) {
    // Attacher un gestionnaire d'événements à tous les champs d'âge pour détecter les changements de valeur
    $(ageFieldClass).on('input', function() {
        // Récupérer la valeur de l'âge
        var ageValue = $(this).val();

        // Vérifier si l'âge est inférieur à 15
        if (ageValue < 15) {
            // Si l'âge est inférieur à 15, désactiver immédiatement les champs de filles et garçons
            $(girlsFieldId).prop('disabled', true);
            $(boysFieldId).prop('disabled', true);
        } else {
            // Sinon, activer immédiatement les champs de filles et garçons
            $(girlsFieldId).prop('disabled', false);
            $(boysFieldId).prop('disabled', false);
        }
    });

    // Attacher un gestionnaire d'événements pour détecter le focus sur tous les champs d'âge
    $(ageFieldClass).on('focus', function() {
        // Réactiver immédiatement les champs de filles et garçons lorsque l'utilisateur se concentre sur un champ d'âge
        $(girlsFieldId).prop('disabled', false);
        $(boysFieldId).prop('disabled', false);
    });
}

// Appeler la fonction pour chaque groupe de champs
handleAgeField('#age', '#nbf5', '#nbh5');

