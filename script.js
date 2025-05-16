document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const codeBlocks = document.querySelectorAll('.code-block');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const language = btn.dataset.tab;
            
            // Update active button
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show selected code block
            codeBlocks.forEach(block => {
                block.classList.remove('active');
                if (block.classList.contains(language)) {
                    block.classList.add('active');
                }
            });
        });
    });
});