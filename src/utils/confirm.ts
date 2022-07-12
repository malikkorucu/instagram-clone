export const confirm_setup = (title: string, message: string) => {
  const confirm_modal = document.querySelector("#confirm_modal") as any;
  const confirm_modal_content = document.querySelector(
    "#confirm_modal_content"
  ) as any;
  
  confirm_modal.classList.add("show");
  confirm_modal_content.classList.add("show");

  const confirm_modal_title = document.querySelector(
    "#confirm_modal_title"
  ) as any;
  const confirm_modal_body = document.querySelector(
    "#confirm_modal_body"
  ) as any;

  const ok_btn = document.querySelector("#ok_btn") as any;
  const dismiss_btn = document.querySelector("#dismiss_btn") as any;

  confirm_modal?.classList.add("show");
  confirm_modal_content?.classList.add("show");

  return new Promise((resolve) => {
    confirm_modal_title.textContent = title;
    confirm_modal_body.textContent = message;

    ok_btn.onclick = function () {
      resolve(1);
    };

    dismiss_btn.onclick = function () {
      resolve(0);
    };
  });
};

export const confirm: any = async (title: string, message: string) => {
  const res = await confirm_setup(title, message);
  return res === 1;
};
