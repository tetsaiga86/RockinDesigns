class GithubController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def show
    repos = Github.first[:json]
    render json: repos
  end
end
