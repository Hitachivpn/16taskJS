function add() {
    // todo
}

add(20, 22) // -> 42
add(20)(22) // -> 42
add(20)()(22) // -> 42
add(20)()()()(22) // -> 42
add(20)()()()()()()()()()()()(22) // -> 42
add()(20)(22) // -> 42
add()()()()(20)(22) // -> 42
add()(20)()(22) // -> 42
add()()()()()(20)()()()(22) // -> 42