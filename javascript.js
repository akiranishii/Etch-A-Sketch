let boxes = 4;
const container = document.getElementById("container");

function generate_boxes (boxes) {

    for (let i=0; i < boxes; i++) {
        row_container = document.createElement('div');
        row_container.classList.add('row_container');
        for (let i=0; i < boxes; i++) {
            content = document.createElement('div');
            content.classList.add('content');
            row_container.appendChild(content);
        }
        container.appendChild(row_container);
    }

    contents = document.querySelectorAll('.content');
    contents.forEach((content) => {

        // and for each one we add a 'click' listener
        content.addEventListener('mouseover', function (e) {
        e.target.style.background = 'pink';
        });

    });

}

generate_boxes(boxes);

function ask_number() {
    let number = prompt("Please enter number");
    if (number > 100) {
        alert("User input exceeds maximum limit of 100")
    }
    else {
        rows = document.querySelectorAll('.row_container');
        rows.forEach((row) => {
            row.remove()
        });
        boxes = number;
        generate_boxes(boxes);
    }
}