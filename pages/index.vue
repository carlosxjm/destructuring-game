<template>
  <div class="content">
    <div class="workspace">
      <div class="timer">
        <h3 class="title">Timer</h3>
        00:00
      </div>
      <div class="score">
        <h3 class="title">Scores</h3>
        <div class="player-score">
          <span>00</span>
          <span class="name">Player 1</span>
        </div>
        <span class="divider">x</span>
        <div class="player-score">
          <span>00</span>
          <span class="name">Player 2</span>
        </div>
      </div>
      <div class="editor">
        <div class="editor-content"></div>
        <button>Send</button>
      </div>
    </div>
    <div class="instructions">
      <h3 class="title">Object view</h3>
      <div class="object-viewer"></div>
      <div class="goal">
        <ul class="goal-list">
          <li>Value: 'Test'</li>
          <li>Key: 'AFhSJEI'</li>
          <li>Index: --</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.content
  display: flex
  position: relative
  height: calc(100vh - 80px)
  .workspace
    width: 50%
    height: 100%
    border-right: 1px solid black
    font-size: 60px
    display: flex
    flex-direction: column
    padding-top: 80px
    padding-left: 30px
    .timer

    .score
      display: flex
      flex-wrap: wrap
      .title
        width: 100%
      .divider
        font-size: 30px
        margin: 15px 5px
      .player-score
        display: flex
        flex-direction: column
        align-items: center
        .name
          font-size: 14px
    .editor
      width: calc(100% - 40px)
      padding-top: 40px
      flex-direction: column
      display: flex
      align-items: flex-end
      .editor-content
        width: 100%
        height: 260px
        background: #1f2529
        margin-bottom: 20px
      button
        background: purple
        color: white
        border: none
        padding: 10px 30px
        font-size: 20px
        text-transform: uppercase
        max-width: 150px

.instructions
  position: relative
  min-width: 50%
  padding: 30px
  .title
    margin-bottom: 10px
  .object-viewer
    height: 300px
    width: 100%
    border: 1px solid black
</style>
