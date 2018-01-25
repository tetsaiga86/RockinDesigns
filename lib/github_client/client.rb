require 'httparty'

module Github_Client
  class Client
    BASE_URL = 'https://api.github.com/users/tetsaiga86/repos?per_page=100'.freeze

    def get_github_repos
      request
    end

    private

    def request
      response = with_retry() do
        HTTParty.get "#{BASE_URL}"
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
