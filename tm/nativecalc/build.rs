// This is not needed for the build - just for printing information out during the build process.
// To be removed.
use std::env;

fn main() {
    if let Ok(ndk_home) = env::var("ANDROID_NDK_HOME") {
        println!("cargo:warning=NDK home = {ndk_home}");
    }

    if env::var("CARGO_CFG_TARGET_OS").unwrap() == "android" {
        android();
    } else {
        println!("cargo:warning=Not android");
    }

    println!("cargo:warning={}", "testing");
}

fn android() {
    println!("cargo:warning=Build info:");

    println!(
        "cargo:warning=Android platform API number: {:?}",
        env::var("CARGO_NDK_ANDROID_PLATFORM")
    );
    println!(
        "cargo:warning=Build target ABI: {:?}",
        env::var("CARGO_NDK_ANDROID_TARGET")
    );
    println!(
        "cargo:warning=Output path: {:?}",
        env::var("CARGO_NDK_OUTPUT_PATH")
    );
    println!(
        "cargo:warning=Sysroot path: {:?}",
        env::var("CARGO_NDK_SYSROOT_PATH")
    );
    println!(
        "cargo:warning=Sysroot target: {:?}",
        env::var("CARGO_NDK_SYSROOT_TARGET")
    );
    println!(
        "cargo:warning=Sysroot libs path: {:?}",
        env::var("CARGO_NDK_SYSROOT_LIBS_PATH")
    );
}
