<div style="height:100px">Our element that prevents navigation</div>

<script>
    const element = document.querySelector('div');

    element.addEventListener('touchstart', (e) => {
        // prevent swipe to navigate gesture
        e.preventDefault();
    });

<iframe
    src="https://cleverprogrammer.metabaseapp.com/public/question/c4fbf8aa-3a2b-45cf-8b1b-80fba5782e55"
    frameborder="0"
    width="800"
    height="600"
    allowtransparency
></iframe>
</script>
