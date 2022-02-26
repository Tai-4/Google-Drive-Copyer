main();

async function main(){
    const observeTarget = await waitImageElementParentLoad();
    addNormalContextMenu();
    
    const observer = new MutationObserver(switchProcessByMutation)
    const config = { childList: true };
    observer.observe(observeTarget, config);
};

function delay(millisecond){
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
}

function getImageElement(){
    return document.querySelector("body > div.a-b.a-b-ja-el-db.a-b-Oe-n.a-b-L.a-b-Na > div.a-b-Sh > div.a-b-Sh-ng.a-b-va-Zf > div.a-b-ah > div.a-b-ta-j > div.a-b-ta.a-b-ta-Oa-Zf.a-b-tb-Ce > img");
}

function getImageElementParent(){
    return document.querySelector("body > div.a-b.a-b-ja-el-db.a-b-Oe-n.a-b-L.a-b-Na > div.a-b-Sh");
}

async function waitImageElementLoad(){
    while(getImageElement() === null){
        await delay(500);
    }

    return getImageElement();
}

async function waitImageElementParentLoad(){
    while(getImageElementParent() === null){
        await delay(500);
    }

    return getImageElementParent();
}

function switchProcessByMutation(mutationList){
    mutationList.forEach((mutation) => {
        if (mutation.addedNodes.length > 0){
            addNormalContextMenu();
        }
    });
}

async function addNormalContextMenu(){
    const imageElement = await waitImageElementLoad();
    imageElement.addEventListener("contextmenu", stopPropagation, true);
}

function stopPropagation(event){
    event.stopPropagation();
}