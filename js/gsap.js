    // 註冊套件
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.navbar', {
      yPercent: -100,
      duration: 0.2,
      scrollTrigger: {
        // 沒有 trigger 觸發目標，整份文件都是捲動監控
        start: `top ${$('.navbar').height()}`,
        end: () => '+=' + document.documentElement.scrollHeight,
        onEnter(self) {
          self.animation.play()
        },
        onUpdate(self) {
          self.direction === -1 ? self.animation.play() : self.animation.reverse()
        },
        markers: false
      }
    })

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#Skill',
        start: 'top 100%',
        end: 'bottom 100%',
        toggleActions: 'play none reverse none',
        scrub: 1,
        // markers: true,
      },
      defaults: {
        duration: 1,
        ease: 'power1'
      }
    })

    tl1
    .from('.top-btn', {
      opacity: 0
    })

    window.addEventListener('mousemove', function (e) {
      // console.log(e.pageX, e.pageY);
      console.log(e.pageX - window.innerWidth / 2);
      gsap.to('.my-img', {
        boxShadow: `${-(e.pageX - window.innerWidth / 2) / 60}px ${-(e.pageY - window.innerHeight / 2) / 60}px 30px rgba(0,0,0,0.5)`,
        rotationX: -(e.pageX - window.innerWidth / 2) / 100,
        rotationY: -(e.pageY - window.innerHeight / 2) / 50,
        rotationZ: -(e.pageX - window.innerWidth / 2) / 500,
        skewX: -(e.pageX - window.innerWidth / 2) / 500,
        skewY: -(e.pageY - window.innerHeight / 2) / 500,
        // x: e.pageX - window.innerWidth / 2,
        duration: 1,
      })
    })