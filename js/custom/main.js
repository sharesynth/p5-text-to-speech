var setup;
var draw;

(function() {
    var selectBox;
    var speechIndex = 1;
    var speech = new p5.Speech();
    var words = [
        'And hence not only at substantiated times, upon well known separate feeding-grounds, could Ahab hope to encounter his prey.',
        'This was beyond the boys, and they let it slip by, words and thoughts, as a mere senile wandering in the narrative.',
        '"Very well," answered the little man; "I will get it for you."',
        '"Certainly," returned the conductor, "besides, it will take us as long as that to reach Medicine Bow on foot."'
    ];

    speech.onLoad = function() {
        populateSelectDropdown();
        addEventListeners();
        speech.setVoice(speechIndex);
    };

    populateSelectDropdown = function() {
        selectBox = document.getElementById('select');
        for (var i = 0; i < speech.voices.length; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.innerHTML = speech.voices[i].name;
            if (i === speechIndex) {
                option.selected = 'selected';
            }

            selectBox.appendChild(option);
        }

        selectBox.addEventListener('change', function(event) {
            speech.setVoice(selectBox.selectedIndex);
        });
    }

    addEventListeners = function() {
        var robot = document.getElementById('robot');
        robot.addEventListener('click', function() {
            speech.speak(words[Math.floor(Math.random() * words.length)]);
        }, false);
    }

    setup = function() {
        createCanvas(10, 10);
    }

    draw = function() {}
})();
