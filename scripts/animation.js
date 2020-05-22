window.onload = function () {
    let map =  document.querySelector('.map');
    let daniel =  document.querySelector('.daniel');
    let windy =  document.querySelector('.windy');
    let ness =  document.querySelector('.ness');
    let smith =  document.querySelector('.smith');
    let nufe =  document.querySelector('.nufe');
    let jonnii =  document.querySelector('.jonnii');
    let sillax =  document.querySelector('.sillax');

    windy.style.transform = "translate(-110%, 350%)";
    ness.style.transform = "translate(-100%, 350%)";
    sillax.style.transform = 'translate(-300%, 250%)';
    jonnii.style.transform = 'translate(-500%, 175%)';

    setTimeout(function () {
        windy.style.transition = 'transform 2s';
        windy.style.transform = 'translate(450%, 350%)';
        setTimeout(function () {
            map.style.transition = 'transform .3s';
            map.style.transform = 'translate(0, -1%)';

            setTimeout(function () {
                daniel.querySelector('.active').classList.remove('active');
                daniel.querySelector('.character-right').classList.add('active');
                map.style.transform = 'translate(-10%, -1%)';

                setTimeout(function () {
                    daniel.querySelector('.active').classList.remove('active');
                    daniel.querySelector('.character-up').classList.add('active');
                    map.style.transform = 'translate(-10%, .5%)';

                    setTimeout(function () {
                        daniel.querySelector('.active').classList.remove('active');
                        daniel.querySelector('.character-left').classList.add('active');
                        map.style.transform = 'translate(0%, .5%)';

                        setTimeout(function () {
                            windy.style.transition = 'transform .4s';
                            windy.querySelector('.active').classList.remove('active');
                            windy.querySelector('.character-up').classList.add('active');
                            windy.style.transform = 'translate(450%, 200%)';

                            setTimeout(function () {

                                windy.querySelector('.active').classList.remove('active');
                                daniel.querySelector('.active').classList.remove('active');
                                windy.querySelector('.character-down').classList.add('active');
                                daniel.querySelector('.character-up').classList.add('active');
                                windy.style.transform = 'translate(450%, 225%)';
                                map.style.transform = 'translate(0%, 2%)';

                                setTimeout(function () {
                                    windy.querySelector('.active').classList.remove('active');
                                    windy.querySelector('.character-left').classList.add('active');
                                    windy.style.transform = 'translate(275%, 225%)';

                                    setTimeout(function () {
                                        daniel.querySelector('.active').classList.remove('active');
                                        daniel.querySelector('.character-left').classList.add('active');
                                        map.style.transform = 'translate(5%, 2%)';
                                        
                                        setTimeout(function () {
                                            windy.style.transform = 'translate(150%, 225%)';
                                            setTimeout(function () {
                                                map.style.transform = 'translate(8%, 2%)';

                                                setTimeout(function () {
                                                    ness.style.transition = 'transform .3s';
                                                    windy.querySelector('.active').classList.remove('active');
                                                    ness.querySelector('.active').classList.remove('active');
                                                    windy.querySelector('.character-up').classList.add('active');
                                                    ness.querySelector('.character-up').classList.add('active');
                                                    windy.style.transform = 'translate(150%, 175%)';
                                                    ness.style.transform = 'translate(-100%, 300%)';
        
                                                    setTimeout(function () {
                                                        map.style.transform = 'translate(20%, 2%)';

                                                        setTimeout(function() {
                                                            daniel.querySelector('.active').classList.remove('active');
                                                            windy.querySelector('.active').classList.remove('active');
                                                            ness.querySelector('.active').classList.remove('active');
                                                            daniel.querySelector('.character-up').classList.add('active');
                                                            windy.querySelector('.character-left').classList.add('active');
                                                            ness.querySelector('.character-left').classList.add('active');
                                                            map.style.transform = 'translate(20%, 3%)';
                                                            windy.style.transform = 'translate(-200%, 175%)';
                                                            ness.style.transform = 'translate(-200%, 300%)';

                                                            setTimeout(function () {
                                                                daniel.querySelector('.active').classList.remove('active');
                                                                daniel.querySelector('.character-left').classList.add('active');
                                                                map.style.transform = 'translate(55%, 3%)';
                                                                windy.style.transform = 'translate(-450%, 175%)';
                                                                ness.style.transform = 'translate(-450%, 300%)';
                                                                setTimeout(function() {
                                                                    sillax.style.transition = 'transform .3s';
                                                                    sillax.querySelector('.active').classList.remove('active');
                                                                    sillax.querySelector('.character-up').classList.add('active');
                                                                    sillax.style.transform = 'translate(-300%, 175%)';

                                                                })
                                                            }, 300)

                                                        }, 300)
                                                    }, 100)
        
                                                }, 400)
                                            }, 100)
    
                                        }, 400)
                                    }, 100)
                                }, 300)
                            }, 300)

                        }, 300)
                    }, 300)
                }, 300)
            }, 300)
        }, 2000)
    }, 100)
}

setTimeout(function () {

},)

// windy.querySelector('.active').classList.remove('active');
// windy.querySelector('.character-down').classList.add('active');