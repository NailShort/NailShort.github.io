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