
function recordGIF() {
    if (firstFrame > lastFrame) {
      if (frameCount === 1) {
      console.log("lastFrame must be a larger value than firstFrame")
    }
    } else if (firstFrame < 1) {
      if (frameCount === 1) {
      console.log("firstFrame must be larger than or equal to a value of 1")
    }
    } else {
    if (isRecording) {
      console.log("recording")
      if (frameCount == firstFrame) {
        capturer.start()
      }
      if (frameCount < lastFrame) {
        capturer.capture(canvasToRecord)
      } else if (frameCount === lastFrame) {
        capturer.stop()
        capturer.save()
      }
    }
    }
  }