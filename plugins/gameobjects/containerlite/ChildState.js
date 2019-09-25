export default {
    getLocalState(gameObject) {
        if (!gameObject.hasOwnProperty('rexContainer')) {
            gameObject.rexContainer = {};
        }
        return gameObject.rexContainer;
    },

    resetChildState(gameObject) {
        this
            .resetChildPositionState(gameObject)
            .resetChildVisibleState(gameObject)
            .resetChildAlphaState(gameObject)
            .resetChildActiveState(gameObject);
        return this;
    },

    resetChildrenState(gameObjects) {
        for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
            this.resetChildState(gameObjects[i]);
        }
        return this;
    },

    syncProperties() {
        this
            .syncPosition()
            .syncVisible()
            .syncAlpha()
            .syncActive()
            .syncScrollFactor()
            .syncMask();
        return this;
    }
};