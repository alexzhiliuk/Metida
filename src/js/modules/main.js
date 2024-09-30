// BURGER
try {

  const burgerBtn = document.querySelector('.burger')
  const burgerMenu = document.querySelector('.burger-menu')
  const burgerBtnClose = burgerMenu.querySelector('.btn-close')
  burgerBtn.onclick = () => {
    burgerMenu.classList.add('burger-menu-active')
  }
  burgerBtnClose.onclick = () => {
    burgerMenu.classList.remove('burger-menu-active')
  }
  window.addEventListener('click', (e) => {
    // TODO: rem when finishing
    if (e.target.tagName === 'VIDEO') return
  
    if (e.target === burgerBtn) return
    if (burgerMenu.contains(e.target)) return
  
    burgerMenu.classList.remove('burger-menu-active')
  })
  
  // SLIDER
  // load нужен чтобы slideWidth четко брался из того положения, когда видео уже реально встало как надо благодаря CSS. Иначе может быть "баг", что slideWidth берется меньший чем нужно из-за, как я понимаю, того что CSS еще не придал тегу video нужные размеры
  window.addEventListener('load', () => {
    const track = document.querySelector('.slider-track')
    void document.querySelector('.slider-track video').clientWidth
    let slideWidth = document.documentElement.clientWidth
    const timeLine = document.querySelector('.time-line')
    const dots = document.querySelector('.dots').children
    const videos = document.querySelectorAll('.slider-track video')
    let activeSlideIdx = 0
    const TIME = 2500
    // const TIME = 8000
    let timeLineAnimStartTime = new Date()
    let timeLineAnimTimeLeft = TIME
    let isSliderStopped = false // behavior of first true is undefined
    let sliderTimeout
  
    // fix того, что слайдер ебется слайдами при +зуме и -зуме
    console.debug(slideWidth)
    window.onresize = () => {
      void document.querySelector('.slider-track video').clientWidth
      void document.documentElement.clientWidth
      slideWidth = document.documentElement.clientWidth
      console.debug(slideWidth)
      console.debug(document.documentElement.clientWidth, 'document.documentElement.clientWidth')
      track.style.transform = `translate3d(-${document.documentElement.clientWidth * activeSlideIdx}px, 0, 0)`
    }
  
    makeTimeLineDisappear()
    let sliderInterval = setInterval(sliderIntervalF, TIME)
  
    // TODO: rem
    setTimeout(() => {
      videos[0].click()
    }, 200)
  
    for (let dot of dots) {
      dot.addEventListener('mouseover', () => {
        if (dot.classList.contains('dot--active')) return
        dot.classList.add('dot--hovered')
      })
      dot.addEventListener('mouseout', () => {
        dot.classList.remove('dot--hovered')
      })
  
      dot.addEventListener('click', () => {
        activeSlideIdx = Number(dot.dataset.idx)
        slide(activeSlideIdx)
        clearTimeout(sliderTimeout)
        clearInterval(sliderInterval)
        makeTimeLineAppear()
  
        document.querySelector('.dot--active').classList.remove('dot--active')
        dot.classList.add('dot--active')
        dot.classList.remove('dot--hovered')
  
        timeLineAnimStartTime = new Date()
        timeLineAnimTimeLeft = TIME
        if (!isSliderStopped) {
          makeTimeLineDisappear()
          sliderInterval = setInterval(sliderIntervalF, TIME)
        }
      })
    }
  
    for (let video of videos) {
      video.addEventListener('click', () => {
        isSliderStopped = !isSliderStopped
        if (isSliderStopped) {
          clearTimeout(sliderTimeout)
          clearInterval(sliderInterval)
          makeTimeLineStop()
          const elapsedTime = new Date() - timeLineAnimStartTime
          timeLineAnimTimeLeft = timeLineAnimTimeLeft - elapsedTime
  
          videos.forEach((video) => {
            video.pause()
            video.title = 'Запустить видео'
          })
        } else {
          timeLineAnimStartTime = new Date()
          makeTimeLineGoAgain()
          sliderTimeout = setTimeout(() => {
            timeLineAnimStartTime = new Date()
            timeLineAnimTimeLeft = TIME
            sliderIntervalF()
          }, timeLineAnimTimeLeft)
  
          videos.forEach((video) => {
            video.play()
            video.title = 'Остановить видео'
          })
        }
      })
    }
  
  
    function sliderIntervalF() {
      makeTimeLineAppear()
  
      activeSlideIdx++
      if (activeSlideIdx > 2) activeSlideIdx = 0
      dots[activeSlideIdx].click()
  
      makeTimeLineDisappear()
    }
  
    function slide(mult) {
      track.style.transform = `translate3d(-${slideWidth * mult}px, 0, 0)`
    }
  
    function makeTimeLineDisappear() {
      timeLine.style.transition = `width ${TIME / 1000 + 's'} linear`
      timeLine.classList.add('time-line--disappear')
    }
    function makeTimeLineAppear() {
      timeLine.style.width = ''
  
      timeLine.style.transition = ''
      timeLine.classList.remove('time-line--disappear')
      void timeLine.offsetWidth
    }
    function makeTimeLineStop() {
      timeLine.style.width = timeLine.offsetWidth + 'px'
    }
    function makeTimeLineGoAgain() {
      timeLine.style.width = ''
      timeLine.style.transition = `width ${timeLineAnimTimeLeft / 1000 + 's'} linear`
      // TODO: (ren) makeTimeLineDisappear(ARG)
      timeLine.classList.add('time-line--disappear')
    }
  })
  
  // Photogallery slider
  // const photoGalleryStageReal = document.querySelector('.photogallery-cont-stage-real')
  // photoGalleryStageReal.style.width = document.documentElement.clientWidth + 'px'
  
  // const photoGallery = document.querySelector('.photogallery')
  // const photogalleryContTrack = photoGallery.querySelector('.photogallery-cont-stage')
  // const prevBtnP = photoGallery.querySelector('.photogallery-btn-prev')
  // const nextBtnP = photoGallery.querySelector('.photogallery-btn-next')
  // let stageSlideP = 1
  // prevBtnP.onclick = () => {
  //   // stageSlideP--;
  //   // prevBtnP.disabled = !(stageSlideP > 0)
  //   // nextBtnP.disabled = stageSlideP === 2
  
  //   // photogalleryContTrack.style.transform = `translate3d(-${(638) * stageSlideP}px, 0, 0)`
  // }
  // nextBtnP.onclick = () => {
  //   // stageSlideP++;
  //   // prevBtnP.disabled = !(stageSlideP > 0)
  //   // nextBtnP.disabled = stageSlideP === 2
  
  //   // stuff2Track.style.transform = `translate3d(-${(638) * stageSlideP}px, 0, 0)`
  // }
  
  // // Click and view photos
  // const imgs = photoGallery.querySelectorAll('img')
  // const overlay = document.querySelector('.overlay')
  // const overlayImgCont = overlay.querySelector('.overlay-img-cont')
  // imgs.forEach(img => {
  //   img.addEventListener('click', () => {
  //     overlay.style.display = 'block'
  
  //     const cloned = img.cloneNode()
  //     overlayImgCont.style.top = `calc(50% - ${675}px / 2)`
  //     overlayImgCont.style.left = `calc(50% - ${1100}px / 2)`
  
  //     overlayImgCont.insertAdjacentElement('afterbegin', cloned)
  //     overlayImgCont.querySelector('img').style.maxWidth = '1100px'
  //   })
  // })
  // overlay.addEventListener('click', (e) => {
  //   if (e.target.tagName === 'IMG') return
  
  //   overlay.style.display = 'none'
  //   overlay.querySelector('img').remove()
  // })
  // document.onkeydown = (e) => {
  //   if (e.key === 'Escape') {
  //     overlay.style.display = 'none'
  //     overlay.querySelector('img').remove()
  //   }
  // }
  
  // Slider logos
  // const stuff2 = document.querySelector('.stuff-2')
  // const stuff2Track = stuff2.querySelector('.stuff-2-track')
  // const prevBtn = stuff2.querySelector('#stuff2-prev')
  // const nextBtn = stuff2.querySelector('#stuff2-next')
  // let stageSlide = 0
  // prevBtn.onclick = () => {
  //   stageSlide--;
  //   prevBtn.disabled = !(stageSlide > 0)
  //   nextBtn.disabled = stageSlide === 2
  
  //   stuff2Track.style.transform = `translate3d(-${(1104) * stageSlide}px, 0, 0)`
  // }
  // nextBtn.onclick = () => {
  //   stageSlide++;
  //   prevBtn.disabled = !(stageSlide > 0)
  //   nextBtn.disabled = stageSlide === 2
  
  //   stuff2Track.style.transform = `translate3d(-${(1104) * stageSlide}px, 0, 0)`
  // }
  
  // Form
  const form = document.querySelector('form')
  const submitBtn = form.querySelector('button[type=submit]')
  form.onsubmit = (e) => {
    e.preventDefault()
    submitBtn.disabled = true
  
    const formData = new FormData(form)
    fetch('/receive-applications.php', {
      method: 'POST',
      body: formData
    })
      .then(r => r.text())
      .then(r => {
        submitBtn.disabled = false
        alert(r)
      })
  }
  
  // iframe
  document.querySelector('.iframe').ondblclick = () => {
    document.querySelector('iframe').style.pointerEvents = 'auto'
    document.querySelector('.iframe-text').style.display = 'none'
  }
} catch {
  
}