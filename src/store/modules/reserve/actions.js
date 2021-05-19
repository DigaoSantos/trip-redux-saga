export function addReserve(trip){
    return { //função do redux para enviar objeto
        type: 'ADD_RESERVE',
        trip
    }
}

export function removeReserve(id){
return {
    type: 'REMOVE_RESERVE',
    id,
    }
}

export function updateAmountReserve(id, amount){
    return {
        type: 'UPDATE_RESERVE',
        id,
        amount
    }
}