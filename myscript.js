// // Ensure the DOM content is fully loaded before running JavaScript
// document.addEventListener('DOMContentLoaded', function() {
//     const element = document.getElementById('ror');

//     let currentColorIndex = 0;
//     const colors = ['blue', 'purple', 'red']; // Define colors to transition through
//     const intervalDuration = 100; // Duration in milliseconds
//     let intervalId;

//     // Add event listener for mouseover event
//     element.addEventListener('pointermove', function() {
//         clearInterval(intervalId); // Clear any existing interval
//         intervalId = setInterval(changeColor, intervalDuration);
//     });

//     // Add event listener for mouseout event
//     element.addEventListener('mouseout', function() {
//         clearInterval(intervalId); // Stop the color change interval
//         element.style.color = 'black'; // Reset text color on mouseout
//     });

//     function changeColor() {
//         element.style.color = colors[currentColorIndex];
//         currentColorIndex = (currentColorIndex + 1) % colors.length;
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('ror');

    element.addEventListener('pointermove', function(event) {
     
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const width = rect.width;

      
        const grayValue = 128 - Math.round((x / width) * 128); 

 
        element.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
    });

    element.addEventListener('pointerleave', function() {
       
        element.style.color = '#003366';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('wet');

    element.addEventListener('pointermove', function(event) {
      
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const width = rect.width;

       
        const grayValue = 128 - Math.round((x / width) * 128); 

        
        element.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
    });

    element.addEventListener('pointerleave', function() {
        
        element.style.color = '#003366';
    });
});
 
// document.addEventListener('DOMContentLoaded', function() {
//     const element = document.getElementById('try');

//     element.addEventListener('pointermove', function(event) {
//         // Calculate the color based on the pointer position
//         const rect = element.getBoundingClientRect();
//         const x = event.clientX - rect.left;
//         const width = rect.width;

//         // Calculate the grayscale value from 128 (grey) to 0 (black)
//         const grayValue = 128 - Math.round((x / width) * 128); // Invert to transition from grey to black

//         // Apply the grayscale color to the text
//         element.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
//     });

//     element.addEventListener('pointerleave', function() {
//         // Reset the color to grey when the pointer leaves the element
//         element.style.color = '#003366';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('rightcircle');
    let targetScrollPosition = 1300; 

    function updatingrightcircle() {
        if (window.matchMedia('(max-width:768px').matches){
            targetScrollPosition = 3100;
        } else {
            targetScrollPosition = 1300;
        }
    } 

    updatingrightcircle();
    window.addEventListener('resize',updatingrightcircle);

    window.addEventListener('scroll', function() {


        if (window.scrollY >= targetScrollPosition) {
            element.style.transform = 'translate(-25%, -10%)'; 
            element.style.right = '50%';
        } else {
           
        }
    });

   
});

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('line top');
    const timescroll = 150;
    window.addEventListener('scroll', function(){
        if(window.scrollY >=timescroll){
            element.style.transform = 'translate(0%, 0%)';
            element.style.right = '0%';
        }else {
           
        }
    });

   
});

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('line bottom');
    let timescroll = 250;

 
    function updateTimescroll() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            timescroll = 2000; 
        } else {
            timescroll = 250; 
        }
    }

 
    updateTimescroll();

    
    window.addEventListener('resize', updateTimescroll);

    window.addEventListener('scroll', function() {
        if (window.scrollY >= timescroll) {
            element.style.transform = 'translate(0%, 0%)';
            element.style.right = '0%';
        } else {
        
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('navi');
    const timescroll = 75;
    window.addEventListener('scroll', () => {
        if(window.scrollY >=timescroll){
            element.style.background = '#003366';
           
        }else {
           element.style.background = 'transparent';
            element.style.backdropFilter = 'blur(5px)';
        }
    });

   
});

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('poping');
    let timescroll = 1400;

    function updatepopingtime() {
        if (window.matchMedia('(max-width:768px').matches){
            timescroll = 3100;
        }
        else {
            timescroll = 1400;
        }
    }

    updatepopingtime();
    window.addEventListener('resize',updatepopingtime);


    window.addEventListener('scroll', function(){
        if(window.scrollY >=timescroll){
            element.style.transform = 'scale(1)';
           
        }else {
           
        }
    });

   
});
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('BF');
    let timescroll = 2220;

    function updateTimescroll() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            timescroll = 3200;
        } else {
            timescroll = 2220;
        }
    }

    updateTimescroll();
    window.addEventListener('resize', updateTimescroll);

    window.addEventListener('scroll', function() {
        if (window.scrollY >= timescroll) {
            if (timescroll === 2220) {
                element.style.transform = 'rotate(-30deg) rotatex(25deg) translate3d(65ch, 5in, -16em) scale3d(1.3, 1.3, 1.3)';
            } else if (timescroll === 3200) {
                element.style.transform = 'rotate(-30deg) rotatex(25deg) translate3d(-30ch, 4.45in, 5em) scale3d(0.9, 0.9, 0.9)';
            }
        } else {
            




        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('BF3');
    let timescroll = 2220;
    
    function updatingTimescroll() {
        if(window.matchMedia('(max-width:768px)').matches){
            timescroll = 3200;
        }
        else {
            timescroll = 2220;
        }
    }
    
    updatingTimescroll();
    window.addEventListener('resize', updatingTimescroll);
    
    
    window.addEventListener('scroll', function(){
        if (window.scrollY >= timescroll) {
            if (timescroll === 2220) {
                element.style.transform = 'rotate(-30deg) rotatex(25deg) translate3d(127ch, 1in, -15em) scale3d(1.1, 1.1, 1.1)';
            } else if (timescroll === 3200) {
                element.style.transform = 'rotate(-30deg) rotatex(25deg) translate3d(20ch, 0.2in, 2em) scale3d(0.8, 0.8, 0.8)';
            }
        } else {
            
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('BF2');
    let timescroll = 2220;

function updatingtimescrollbf2() {
    if (window.matchMedia('(max-width:768px)').matches){
        timescroll = 3200;
    }
    else {
        timescroll = 2220;
    }
}
updatingtimescrollbf2();
window.addEventListener('resize', updatingtimescrollbf2)

    window.addEventListener('scroll', function(){
        if (window.scrollY >= timescroll) {
            if (timescroll === 2220) {
                element.style.transform = 'rotate(-30deg) rotatex(20deg) translate3d(105ch, 5.5in, -15em) scale3d(1.2, 1.2, 1.2)'; 
            } else if (timescroll === 3200) {
                element.style.transform = 'rotate(-30deg) rotatex(25deg) translate3d(-2ch, 4.1in, 4em) scale3d(0.85, 0.85, 0.85)';
            }
        } else {
            
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('icongps');
    const timescroll = 1620;
    window.addEventListener('scroll', function(){
        if(window.scrollY >=timescroll){
            element.style.transform = 'scale(2)';
            
        }else {
           
        }
    });

   
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.classList.contains("show")) {
        x.classList.remove("show");
    } else {
        x.classList.add("show");
    }
}

// THIS BELOW IS FOR LIVESTREAM.HTML HAVENT FIXED BUT YEA HAHA.

   const apiKey = '';
    const channelId = 'UCN4RQ2t7V63RWQFdxAm1Liw'; 

    async function loadLiveOrLatestStream() {
        // this is for current live
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
        let res = await fetch(url);
        let data = await res.json();

        let videoId = null;

        if (data.items && data.items.length > 0) {
            videoId = data.items[0].id.videoId;
        } else {
          // this is for past if no current live
            url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`;
            res = await fetch(url);
            data = await res.json();

            if (data.items && data.items.length > 0) {
                videoId = data.items[0].id.videoId;
            }
        }

        if (videoId) {
            document.getElementById('latestVideoContainer').innerHTML =
                `<iframe width="100%" height="100%" 
                         src="https://www.youtube.com/embed/${videoId}" 
                         frameborder="22" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowfullscreen>
                 </iframe>`;
        } else {
            document.getElementById('latestVideoContainer').innerText = "No livestream available.";
        }
    }

    window.addEventListener('DOMContentLoaded', loadLiveOrLatestStream);
// QIRXD8faDN4
//     UCN4RQ2t7V63RWQFdxAm1Liw channel


