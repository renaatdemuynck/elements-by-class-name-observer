
/**
 * Detects changes in the list of elements with a certain class name
 *
 * @param className The class name to observe
 * @param addHandler The function to be executed when a new element is added
 * @param deleteHandler The function to be executed when a new element is added
 */
function elementsByClassNameObserver(className, addHandler, deleteHandler) {
    var liveCollection = document.getElementsByClassName(className);
    var oldSet = new Set(liveCollection);

    // Handle all existing elements
    oldSet.forEach(element => {
        addHandler(element);
    });

    // Handle DOM changes
    var observer = new MutationObserver(() => {
        // Only handle changes if size is different
        if (liveCollection.length === oldSet.size) return;

        let currentSet = new Set(liveCollection);

        // Detect new elements
        currentSet.forEach(element => {
            if (!oldSet.has(element)) {
                addHandler(element);
                oldSet.add(element);
            }
        });

        // Detect deleted elements
        if (deleteHandler !== undefined) {
            oldSet.forEach(element => {
                if (!currentSet.has(element)) {
                    deleteHandler(element);
                    oldSet.delete(element);
                }
            });
        }
    });

    // Observe changes in DOM tree and class names
    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });
}


export default elementsByClassNameObserver;
