namespace :prepopulate do
  desc "gets current repos"
  task github: :environment do
    github_client = ::Github::Client.new

    repos = github_client.get_github_repos

    puts "#{repos}"
  end

end
