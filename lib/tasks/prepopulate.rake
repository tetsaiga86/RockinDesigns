namespace :prepopulate do
  desc "gets current repos"
  task github: :environment do
    github_client = ::Github_Client::Client.new
    repo_manipulation = ::DataManipulation::Repos.new
    repos = repo_manipulation.current_repos(github_client.get_github_repos)

    unless repos.nil?

      db_entry = Github.find_or_create_by(id: 1)
      db_entry.update(json: repos)
    end
  end

end
