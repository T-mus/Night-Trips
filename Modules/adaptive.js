export function dynamicAdaptive(currentParent, newParent, moveObject, places, viewportWidth) {
    let firstPositon = currentParent,
        lastPosition = newParent,
        moveItem = moveObject,
        positions = places,
        breakpoint = viewportWidth;

    //Todo: Прослуховуємо зміни розмірів екрана ↓
    window.addEventListener('resize', movingBlock);

    //Todo: Основна функція ↓
    function movingBlock() {
        let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (viewportWidth <= breakpoint) {
            if (!moveItem.classList.contains('done')) {
                lastPosition.insertBefore(moveItem, lastPosition.children[positions.end]);
                moveItem.classList.add('done');
            }
        }
        else {
            if (moveItem.classList.contains('done')) {
                firstPositon.insertBefore(moveItem, firstPositon.children[positions.start]);
                moveItem.classList.remove('done');
            }
        }
    }
    movingBlock();
}
