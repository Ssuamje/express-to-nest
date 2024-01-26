import verifyToken from "verify-apple-id-token";

enum OauthProvider {
  APPLE = "apple",
}

type OauthValidatedResult = {
  oauthProvider: OauthProvider;
  oauthProviderId: string;
  email: string;
};

interface OauthValidator {
  validate: (identityToken: string) => Promise<OauthValidatedResult | undefined>;
}

const getValidator = (provider: OauthProvider): OauthValidator => {
  switch (provider) {
    case OauthProvider.APPLE:
      return AppleOauthValidator?.getInstance();
  }
};

class AppleOauthValidator implements OauthValidator {
  private readonly CLIENTS = ["com.turning.app"];
  private static INSTANCE: AppleOauthValidator;

  private constructor() {}

  static getInstance(): AppleOauthValidator {
    if (!this.INSTANCE) this.INSTANCE = new AppleOauthValidator();
    return this.INSTANCE;
  }

  async validate(identityToken: string): Promise<OauthValidatedResult | undefined> {
    try {
      const { subject, email } = await verifyToken({
        idToken: identityToken,
        clientId: this.CLIENTS,
      });
      return {
        oauthProvider: OauthProvider.APPLE,
        oauthProviderId: subject,
        email: email,
      };
    } catch (e) {
      console.log(e); // invalidIdentityTokenException
    }
  }
}

export { OauthProvider, OauthValidator, getValidator, OauthValidatedResult };
