import React, { useEffect } from 'react';
import './index.css';

export default function Timer() {
    function Timer(duration:any, element:any) {
        // @ts-ignore
        var self: any = this;
        // @ts-ignore
        this.duration = duration;
        // @ts-ignore
        this.element = element;
        // @ts-ignore
        this.running = false;
        
        // @ts-ignore
        this.els = {
            ticker: document.getElementById('ticker'),
            seconds: document.getElementById('seconds'),
        };
        
        document.getElementById('toggle')?.addEventListener('click', function() {
            var cl = 'countdown--wide';
            if (self.element.classList.contains(cl)) {
                self.element.classList.remove(cl);
            } else {
                self.element.classList.add(cl);
            }
        });
    }
    
    Timer.prototype.start = function() {
        var self = this;
        var start:any = null;
        this.running = true;
        var remainingSeconds = this.els.seconds.textContent = this.duration / 1000;
        
        function draw(now:any) {
            if (!start) start = now;
            var diff = now - start;
            var newSeconds = Math.ceil((self.duration - diff)/1000);
    
            if (diff <= self.duration) {
                self.els.ticker.style.height = 100 - (diff/self.duration*100) + '%';
                
                if (newSeconds != remainingSeconds) {
                    self.els.seconds.textContent = newSeconds;
                    remainingSeconds = newSeconds;
                }
                
                self.frameReq = window.requestAnimationFrame(draw);
            } else {
                //self.running = false;
                self.els.seconds.textContent = 0;
                self.els.ticker.style.height = '0%';
                self.element.classList.add('countdown--ended');
            }
        };
        
        self.frameReq = window.requestAnimationFrame(draw);
    }
    
    Timer.prototype.reset = function() {
        this.running = false;
        window.cancelAnimationFrame(this.frameReq);
        this.els.seconds.textContent = this.duration / 1000;
        this.els.ticker.style.height = null;
        this.element.classList.remove('countdown--ended');
    }
    
    Timer.prototype.setDuration = function(duration:number) {
        this.duration = duration;
        this.els.seconds.textContent = this.duration / 1000;
    }
    
    useEffect(() => {
        // @ts-ignore
        var timer = new Timer(10000, document.getElementById('countdown'));
        timer.start();
    }, [])
   


  return (
    <div className="countdown" id="countdown" >
    <div className="countdown__fill" id="ticker"></div>
    <div className="countdown__digit" id="seconds">10</div>
  </div>
  )
}
