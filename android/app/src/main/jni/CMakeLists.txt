# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

# This CMake file is the default used by apps and is placed inside react-native
# to encapsulate it from user space (so you won't need to touch C++/Cmake code at all on Android).
#
# If you wish to customize it (because you want to manually link a C++ library or pass a custom
# compilation flag) you can:
#
# 1. Copy this CMake file inside the `android/app/src/main/jni` folder of your project
# 2. Copy the OnLoad.cpp (in this same folder) file inside the same folder as above.
# 3. Extend your `android/app/build.gradle` as follows
#
# android {
#    // Other config here...
#    externalNativeBuild {
#        cmake {
#            path "src/main/jni/CMakeLists.txt"
#        }
#    }
# }

cmake_minimum_required(VERSION 3.13)

message(STATUS "STARTING APPMODULES")

message(STATUS "CMAKE SYSTEM NAME = ${CMAKE_SYSTEM_NAME}")

# Define the library name here.
project(appmodules)

# This file includes all the necessary to let you build your application with the New Architecture.
message(STATUS "Inside jni, REACT_ANDROID_DIR = ${REACT_ANDROID_DIR}")
include(${REACT_ANDROID_DIR}/cmake-utils/ReactNative-application.cmake)

# App needs to add and link against tm (TurboModules) folder
add_subdirectory(${REACT_ANDROID_DIR}/../../../tm/ tm_build)
message(STATUS "Inside jni, CMAKE_PROJECT_NAME = ${CMAKE_PROJECT_NAME}")
target_link_libraries(${CMAKE_PROJECT_NAME} tm)