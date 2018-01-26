require 'httparty'

module Github_Client
  class Client
    BASE_URL = 'https://api.github.com/users/tetsaiga86/repos?per_page=100'.freeze

    def get_github_repos
      request BASE_URL
    end

    def get_secondary_url url
      request url
    end
    private

    def request url
      response = with_retry() do
        HTTParty.get "#{url}"
      end

      if response.code == 200
        response.parsed_response
      else
        nil
      end
    end

    def with_retry(limit=5)
      response = nil
      1.upto(limit) do
        response = yield
        if response.code == 200
          break
        end
      end
      response
    end
  end
end
