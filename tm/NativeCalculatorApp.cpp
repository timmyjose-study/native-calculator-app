#include "NativeCalculatorApp.h"

extern "C" int rust_add(int x, int y);
extern "C" int rust_sub(int x, int y);
extern "C" int rust_mul(int x, int y);
extern "C" int rust_div(int x, int y);
extern "C" int the_answer();

namespace facebook::react {
NativeCalculatorApp::NativeCalculatorApp(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeCalculatorAppCxxSpec(std::move(jsInvoker)) {}

int NativeCalculatorApp::add(jsi::Runtime &rt, int x, int y) {
  return rust_add(x, y);
}

int NativeCalculatorApp::sub(jsi::Runtime &rt, int x, int y) {
  return rust_sub(x, y);
}

int NativeCalculatorApp::mul(jsi::Runtime &rt, int x, int y) {
  return rust_mul(x, y);
}

int NativeCalculatorApp::div(jsi::Runtime &rt, int x, int y) {
  return rust_div(x, y);
}

int NativeCalculatorApp::the_answer(jsi::Runtime &rt) { return ::the_answer(); }
} // namespace facebook::react
