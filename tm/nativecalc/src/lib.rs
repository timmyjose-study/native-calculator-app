#[no_mangle]
pub extern "C" fn rust_add(x: i32, y: i32) -> i32 {
    x + y
}

#[no_mangle]
pub extern "C" fn rust_sub(x: i32, y: i32) -> i32 {
    x - y
}

#[no_mangle]
pub extern "C" fn rust_mul(x: i32, y: i32) -> i32 {
    x * y
}

#[no_mangle]
pub extern "C" fn rust_div(x: i32, y: i32) -> i32 {
    if y == 0 {
        0
    } else {
        x / y
    }
}

#[no_mangle]
pub extern "C" fn the_answer() -> i32 {
    42
}
