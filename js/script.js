// script.js

// Function to format numbers with leading zeros
function formatNumber(number) {
    return number.toString().padStart(2, '0');
}

// Function to generate numbered lines in the editor
function generateNumberedLines(containerId, numberOfLines) {
    const container = document.getElementById(containerId);

    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.className = 'line';

        const lineNumber = document.createElement('span');
        lineNumber.className = 'line-number';
        lineNumber.textContent = formatNumber(i + 1); // Format the line number with leading zero

        line.appendChild(lineNumber);

        container.appendChild(line);
    }
}

// Variable to keep track of the currently highlighted line index
let currentHighlightedIndex = -1;

// Function to highlight the line number based on mouse position
function highlightLineNumber(event) {
    console.log('Mouse move detected'); // Check if this logs
    const lines = document.querySelectorAll('.line-number');
    const lineHeight = 30; // Height of each line, adjust if necessary

    // Calculate the relative position
    const offsetY = window.scrollY + event.clientY -20; // Y position including scroll
    let relativeLineIndex = Math.round(offsetY / lineHeight);

    // Ensure at least one line is highlighted
    if (relativeLineIndex < 0) {
        relativeLineIndex = 0;
    } else if (relativeLineIndex >= lines.length) {
        relativeLineIndex = lines.length - 1;
    }

    // Only update the highlight if the mouse is over a different line
    if (relativeLineIndex !== currentHighlightedIndex) {
        // Remove the highlight from the previous line
        if (currentHighlightedIndex !== -1) {
            lines[currentHighlightedIndex].classList.remove('highlight');
        }

        // Highlight the new line
        lines[relativeLineIndex].classList.add('highlight');
        currentHighlightedIndex = relativeLineIndex; // Update the current highlighted index
    }
}

// Attach the mousemove event to the entire document
document.addEventListener('mousemove', highlightLineNumber);

// Generate enough lines to fill the viewport height
generateNumberedLines('code-editor', 120);