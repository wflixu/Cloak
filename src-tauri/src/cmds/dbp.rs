#[tauri::command]
pub fn my_custom_command() -> String {
  println!("I was invoked from JavaScript!");
  "hello world".to_string()
}
#[tauri::command]
pub fn start_server() {
  println!("I was invoked from JavaScript!");
}