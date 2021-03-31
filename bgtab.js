const initRunner = function(e) {
    const bgKey = 59;  // semicolon key
    const tag   = e.target.tagName.toLowerCase();

    //  Guard clauses
    if(e.keyCode !== bgKey)   
        return true;

    if(tag === 'input' || tag === 'textarea')
        return true;

    if(e.altKey || e.ctrlKey)
        return true;

    const link = document.querySelector('.inlineFrame--selected [data-alternate-link^="http"]');

    if(link)
        chrome.runtime.sendMessage({ url: link.getAttribute('data-alternate-link') });
};

if(document.readyState === 'complete')
    window.addEventListener('keypress', initRunner, false);
else
    document.addEventListener('readystatechange', e => {
        if(e.target.readyState === 'complete')
            window.addEventListener('keypress', initRunner, false);
    });