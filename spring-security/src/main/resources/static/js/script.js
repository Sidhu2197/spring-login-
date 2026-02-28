function suggestWorkout() {
    const text = document.getElementById('userInput').value.toLowerCase();
    const resultDiv = document.getElementById('workoutResult');
    resultDiv.style.display = "block";

    let suggestion = "";

    if (text.includes("belly") || text.includes("stomach") || text.includes("fat")) {
        suggestion = `
        <h3>Belly Fat Loss Routine</h3>
        <ul>
            <li><strong>High Intensity Cardio:</strong> 20 mins sprinting</li>
            <li><strong>Planks:</strong> 3 sets of 1 minute</li>
            <li><strong>Mountain Climbers:</strong> 3 sets of 30 seconds</li>
            <li><strong>Leg Raises:</strong> 4 sets of 15 reps</li>
        </ul>
        `;
    } else if (text.includes("arm") || text.includes("bicep") || text.includes("tricep")) {
        suggestion = `
        <h3>Arm Definition Plan</h3>
        <ul>
            <li><strong>Pushups:</strong> 3 sets to failure</li>
            <li><strong>Overhead Triceps Extension:</strong> 3 sets of 12</li>
            <li><strong>Bicep Curls:</strong> 4 sets of 12</li>
            <li><strong>Triceps Pushdown:</strong> 3 sets of 12</li>
            <li><strong>Tricep Dips:</strong> 3 sets of 10</li>
        </ul>`;
    } else if (text.includes("leg")) {
        suggestion = `
        <h3>Leg Strength Plan</h3>
        <ul>
            <li><strong>Squats:</strong> 4 sets of 8</li>
            <li><strong>Leg Press:</strong> 3 sets of 10</li>
            <li><strong>Leg Extension:</strong> 3 sets of 12</li>
            <li><strong>Bulgarian Split Squat:</strong> 3 sets of 8</li>
        </ul>`;
    } else if (text.includes("back")) {
        suggestion = `
        <h3>Back Definition Plan</h3>
        <ul>
            <li><strong>Dead Hangs:</strong> 2 x 1 min</li>
            <li><strong>Lat Pulldown:</strong> 3 sets of 10</li>
            <li><strong>Barbell Row:</strong> 3 sets of 8</li>
        </ul>`;
    } else if (text.includes("chest")) {
        suggestion = `
        <h3>Chest Definition Plan</h3>
        <ul>
            <li><strong>Incline Press:</strong> 3 sets of 8</li>
            <li><strong>Cable Fly:</strong> 3 sets of 12</li>
            <li><strong>Flat Bench Press:</strong> 3 sets of 8</li>
        </ul>`;
    } else {
        suggestion = `
        <h3>Custom Plan</h3>
        <p>Full body workout + 30 minutes walking daily</p>`;
    }

    resultDiv.innerHTML = suggestion;
}

function previewImage(event) {
    const reader = new FileReader();
    const output = document.getElementById('outputImage');
    const previewArea = document.getElementById('preview-area');

    reader.onload = function () {
        output.src = reader.result;
        previewArea.style.display = "block";
    };

    reader.readAsDataURL(event.target.files[0]);
}

const foodDb = {
    "chicken breast":   { protein: "31g", fat: "3.6g", benefits: "Lean muscle building and high satiety." },
    "chicken biriyani": { protein: "11g", fat: "3-9g", benefits: "Being a balanced meal with protein, carbs, and fats, boosting immunity." },
    "chicken thigh":    { protein: "26g", fat: "10g",  benefits: "Juicier meat with essential minerals; good for energy." },
    "chicken wing":     { protein: "22g", fat: "16g",  benefits: "Higher collagen content; good for joint health." },
    "chicken drumstick":{ protein: "24g", fat: "9g",   benefits: "Rich in dark meat nutrients and zinc." },
    "paneer":           { protein: "18g", fat: "20g",  benefits: "Slow-digesting protein (Casein); great for muscle recovery during sleep." },
    "chicken shawarma": { protein: "25g", fat: "15g",  benefits: "High protein, but watch for added fats in sauces and bread carbs." },
    "dry fruits":       { protein: "20g", fat: "50g",  benefits: "Healthy omega-3 fats and quick calorie-dense energy." }
};

function analyzeFood() {
    const food = document.getElementById('foodInput').value.toLowerCase();
    const resultDiv = document.getElementById('foodResult');
    resultDiv.style.display = "block";

    let found = false;
    for (let key in foodDb) {
        if (food.includes(key)) {
            const data = foodDb[key];
            resultDiv.innerHTML = `
                <h3>Results for: ${key.toUpperCase()}</h3>
                <p><strong>Protein:</strong> ${data.protein} (per 100g)</p>
                <p><strong>Fat Content:</strong> ${data.fat}</p>
                <p><strong>What your body gets:</strong> ${data.benefits}</p>
            `;
            found = true;
            break;
        }
    }
    if (!found) resultDiv.innerHTML = "<h3>Food Not Found</h3><p>Try: Chicken Breast, Paneer, or Shawarma.</p>";
}

function analyzeImage() {
    const resultDiv = document.getElementById('visionResult');
    const imageInput = document.getElementById('imageUpload');

    if (imageInput.files.length === 0) {
        alert("Please select a photo first!");
        return;
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<p>AI is identifying ingredients...</p><div class="progress-bar"></div>`;

    // Mock detection: matches food type based on filename keywords
    setTimeout(() => {
        const fileName = imageInput.files[0].name.toLowerCase();
        let match = "dry fruits";

        if (fileName.includes("paneer")) match = "paneer";
        else if (fileName.includes("breast")) match = "chicken breast";
        else if (fileName.includes("shawarma")) match = "chicken shawarma";
        else if (fileName.includes("thigh")) match = "chicken thigh";

        const data = foodDb[match];
        resultDiv.innerHTML = `
            <h3>AI Recognition Result: ${match.toUpperCase()} ✅</h3>
            <p><strong>Protein:</strong> ${data.protein}</p>
            <p><strong>Body Gains:</strong> ${data.benefits}</p>
            <p><small>*Estimates based on standard portions.</small></p>
        `;
    }, 1500);
}
