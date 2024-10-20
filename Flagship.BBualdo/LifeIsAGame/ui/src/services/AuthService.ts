import axios, { AxiosResponse } from "axios";
import { baseUrl, externalParams } from "@/src/utils/config";
import ILoginData from "@/src/models/ILoginData";
import IRegisterData from "@/src/models/IRegisterData";
import IUser from "@/src/models/IUser";
import generateRandomString from "@/src/utils/generateRandomString";
import IOperationResult from "@/src/models/IOperationResult";
import INewPasswordDto from "@/src/services/DTO/INewPasswordDto";

class AuthService {
  static async login(loginData: ILoginData): Promise<AxiosResponse<any, any>> {
    return await axios.post(baseUrl + "auth/login", loginData, {
      withCredentials: true,
    });
  }

  static async register(
    registerData: IRegisterData,
  ): Promise<AxiosResponse<any, any>> {
    return await axios.post(baseUrl + "auth/register", registerData, {
      withCredentials: true,
    });
  }

  static async logout(): Promise<AxiosResponse<any, any>> {
    return await axios.post(
      baseUrl + "auth/logout",
      {},
      { withCredentials: true },
    );
  }

  static async getCurrentUser(): Promise<AxiosResponse<IUser>> {
    return await axios.get(baseUrl + "auth/current-user", {
      withCredentials: true,
    });
  }

  static loginWithGithub(): void {
    const params = new URLSearchParams({
      client_id: externalParams.github.clientId!,
      redirect_uri: externalParams.github.redirectUri,
      scope: "user user:email",
      state: generateRandomString(),
      prompt: "select_account",
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
  }

  static async handleGithubCallback(
    code: string,
  ): Promise<AxiosResponse<IOperationResult>> {
    return await axios.get(baseUrl + "auth/login-with-github", {
      params: { code },
      withCredentials: true,
    });
  }

  static loginWithFacebook(): void {
    const params = new URLSearchParams({
      client_id: externalParams.facebook.clientId!,
      redirect_uri: externalParams.facebook.redirectUri,
      response_type: "code",
      scope: "email",
      state: generateRandomString(),
      auth_type: "reauthenticate",
    });

    window.location.href = `https://www.facebook.com/v20.0/dialog/oauth?${params.toString()}`;
  }

  static async handleFacebookCallback(
    code: string,
  ): Promise<AxiosResponse<IOperationResult>> {
    return await axios.get(baseUrl + "auth/login-with-facebook", {
      params: { code },
      withCredentials: true,
    });
  }

  static loginWithGoogle(): void {
    const params = new URLSearchParams({
      client_id: externalParams.google.clientId!,
      redirect_uri: externalParams.google.redirectUri,
      response_type: "code",
      scope: "profile email",
      state: generateRandomString(),
      access_type: "offline",
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  static async handleGoogleCallback(
    code: string,
  ): Promise<AxiosResponse<IOperationResult>> {
    return await axios.get(baseUrl + "auth/login-with-google", {
      params: { code },
      withCredentials: true,
    });
  }

  static async linkAccount(
    code: string,
    userId: string,
    providerName: string,
  ): Promise<AxiosResponse<IOperationResult>> {
    return await axios.post(
      baseUrl + "auth/link-account",
      {},
      { params: { code, userId, providerName }, withCredentials: true },
    );
  }

  static async unlinkAccount(
    providerName: string,
    userId: string,
  ): Promise<AxiosResponse<IOperationResult>> {
    return await axios.post(
      baseUrl + `auth/unlink-account`,
      {},
      {
        params: { providerName, userId },
        withCredentials: true,
      },
    );
  }

  static async forgotPassword(
    email: string,
  ): Promise<AxiosResponse<IOperationResult>> {
    return await axios.get(baseUrl + "auth/forgot-password", {
      params: { email },
      withCredentials: true,
    });
  }

  static async resetPassword(
    newPasswordDto: INewPasswordDto,
  ): Promise<AxiosResponse<IOperationResult>> {
    return await axios.post(baseUrl + "auth/reset-password", newPasswordDto, {
      withCredentials: true,
    });
  }
}

export default AuthService;
