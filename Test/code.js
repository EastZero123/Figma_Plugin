figma.showUI(__html__, {
  width: 600,
  height: 400,
  title: "Build Rectangle",
  position: { x: 50, y: 50 },
})

figma.ui.onmessage = (message) => {
  console.log(JSON.stringify(message) + "받음")
  const rect = figma.createRectangle()
  rect.resize(Number(message.garo), Number(message.sero))
}

console.log(figma.currentPage)
