module DataManipulation
  class Repos
    def current_repos(all_repos)
      repos_with_description = all_repos.select do |repo|
        if repo['description'] && !repo['fork']
          repo
        end
      end

      sorted = repos_with_description.sort_by{ |repo| DateTime.parse(repo['updated_at']).to_i}
      sorted.reverse.first(5)
    end
  end
end
