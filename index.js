module.exports = ({ app }) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("pull_request.closed", async (context) => {
    const pr = context.payload.pull_request;
   //ß app.log.info(pr);

    const baseRef = pr.base.ref;
    //check if PR merged to development
    if (pr.merged && baseRef == "development") {
      app.log.info(pr.body);

      const owner = "vilias"
      const repo = "development"

/*
    //inncrement tag name by 1
    context.octokit.repos.getLatestRelease({
      owner,
      repo
    }).then(result => {
      app.log.info(result);
      const tag_name = (parseInt(result.data.tag_name) + 1.0).toString() + '.0'
      app.log.info("*********************");
      app.log.info(tag_name);
    });

*/

    //Check if draft with tag name exist


      // //Delete if exists
      // conntext.octokit.repos.updateRelease()

      //Create new draft
      context.octokit.repos.createRelease(owner, repo, {body: pr.body, draft: true})
    }
  });

}


  /*
      //Check if PR merged to development
      //Update release draft, if no draft create 
      const baseRef = pr.base.ref;
      if (baseRef == "development") {
        const basePR = allPRs.data.find(pull => {
            return pull.head.ref === baseRef;
        });

        //get PR Body
        app.log.info(basePR.body)
/*
        const repo = context.repo({

        })
*/
/*
        //create new draft
        const tagName = `v${info.nextVersion}`
        context.github.repos.createRelease({
          owner,
          repo,
          body: basePR.body,
          tag_name: tagName,
          name: tagName,
          draft: true,
          prerelease: false,
        });

      }
   } 
  });
  */

  

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
//};
