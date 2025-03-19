document.getElementById('gradeForm').addEventListener('submit'), function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from inputs
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let subject4 = parseFloat(document.getElementById('subject4').value);
    let subject5 = parseFloat(document.getElementById('subject5').value);

    // Calculate total and percentage
    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    let percentage = (totalMarks / 500) * 100;

    // Determine grade based on percentage
    let grade = '';
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 75) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else {
        grade = 'D';
    }

    // Show result
    document.getElementById('percentage').textContent = percentage.toFixed(2);
    document.getElementById('grade').textContent = "Grade" + grade;
}