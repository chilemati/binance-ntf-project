// alert('imported');

// on click of the search input, show a drop down list

    // get the input
    const searchInput = document.querySelector('input#ph-bg-search');
    const inputDropdwon =document.querySelector('.click-dropdown');
    console.log(searchInput);
    console.log(inputDropdwon);
    // add a click event listener

    // searchInput.addEventListener('click', ()=>{
    //     inputDropdwon.style.display='block';
    // })

    // close it when the body is clicked

        // get body
        const bodyTag = document.querySelector('body');
        console.log(bodyTag);
    // ADD Event listener

    bodyTag.addEventListener('click', (x)=>{
        console.log(x.target)
        if(x.target.id !== 'ph-bg-search'){
        inputDropdwon.style.display='none';
        }
        else if(x.target.id === 'ph-bg-search'){
            inputDropdwon.style.display='block';

        }
    })



















