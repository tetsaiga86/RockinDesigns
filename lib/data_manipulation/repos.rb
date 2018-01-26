module DataManipulation
  class Repos
    def current_repos all_repos
      repos_with_description = all_repos.select do |repo|
        if repo['description'] && !repo['fork']
          repo
        end
      end

      sorted = repos_with_description.sort_by{ |repo| DateTime.parse(repo['pushed_at']).to_i}
      sorted.reverse.first(5)
    end

    def populate_lang repos
      github_client = ::Github_Client::Client.new
      repos.each do |repo|
        repo['languages_url'] = github_client.get_secondary_url(repo['languages_url'])
      end
    end
  end
end
